import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'
import ErrorComponent from '@/app/error'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'

interface WebStoreData {
  name: string
  score: number
  reviews: number
  image: string
  description: string
}

const webStoreRegex = /AF_initDataCallback\({key: 'ds:0', hash: '\d+', data:(.*?), sideChannel:/
async function getWebStoreData(id: string): Promise<WebStoreData> {
  const res = await fetch(`https://chromewebstore.google.com/detail/${id}?hl=ko`, {
    next: {
      revalidate: 60,
    },
  })
  const text = await res.text()

  const match = webStoreRegex.exec(text)
  if (!match) throw new TypeError('확장 프로그램 정보를 찾지 못했습니다.')
  const data = JSON.parse(match[1])

  const [ , , name, score, reviews, image, description ] = data[0]
  const output = {
    name,
    score: score || 0,
    reviews: reviews || 0,
    image,
    description,
  }

  return output
}

export const WebStoreExtension = async ({ id }: { id: string }) => {
  const { name, score, reviews, image, description } = await getWebStoreData(id)

  return <>
    <Link href={`https://chrome.google.com/webstore/detail/${id}`} target='_blank' aria-label={name} className='absolute rounded-[20px] w-full h-full z-10' />
    <div className='flex flex-col p-4'>
      <Image
        src={image}
        alt={`${name} 이미지`}
        width={256}
        height={163}
        priority
        className='w-full rounded-[12px] aspect-11/7'
      />
      <p className='text-base font-medium mt-3'>{name}</p>
      <span className='mt-1 text-[14px]'>
        <span className='flex items-center'>
          <span className='font-medium mr-0.5'>{score.toFixed(1)}</span>
          ⭐
          <span className='ml-0.75'>({reviews})</span>
        </span>
      </span>
      <p className='text-[14px] mt-2 min-h-10'>{description}</p>
    </div>
  </>
}

export const WebStoreLoading = ({ id }: { id: string }) => <>
  <Link href={`https://chrome.google.com/webstore/detail/${id}`} target='_blank' className='absolute rounded-[20px] w-full h-full z-10' />
  <div className='flex flex-col p-4 not-dark:brightness-90'>
    <Skeleton className='w-[208.25px] rounded-[12px] aspect-11/7' />
    <Skeleton className='w-24 h-6 mt-3' />
    <Skeleton className='w-16 mt-1 h-[21px]' />
    <Skeleton className='mt-2 h-[42px]' />
  </div>
</>

export const WebStoreExtensionList = ({ list }: { list: string[] }) =>
  <Carousel opts={{ skipSnaps: true }} className='mt-6 select-none group'>
    <CarouselContent className='w-[240.25px] gap-[21px]'>
      {list.map(id =>
        <CarouselItem key={id}>
          <div className='w-[240.25px] relative bg-[#f0f4f9] dark:bg-[#181819] rounded-[20px] hover:before:bg-[#444746] hover:before:opacity-8 hover:before:block hover:before:absolute hover:before:inset-0 hover:before:rounded-[20px] active:before:opacity-10'>
            <Suspense fallback={<WebStoreLoading id={id} />}>
              <ErrorBoundary errorComponent={ErrorComponent}>
                <WebStoreExtension id={id} />
              </ErrorBoundary>
            </Suspense>
          </div>
        </CarouselItem>
      )}
    </CarouselContent>
  </Carousel>

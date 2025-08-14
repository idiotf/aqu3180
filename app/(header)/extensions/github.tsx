import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'
import ErrorComponent from '@/app/error'
import { Skeleton } from '@/components/ui/skeleton'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'

interface GithubExtData {
  name: string
  image?: string
  description: string
}

interface GithubSiteData {
  id: string
  name: string
  description: string
}

async function getGithubExtData(name: string): Promise<GithubExtData> {
  const res = await fetch(`https://raw.githubusercontent.com/idiotf/${name}/main/build/manifest.json`, {
    cache: 'force-cache',
  })
  const json = await res.json()

  return {
    name: json.name,
    description: json.description,
    image: json.icons && `https://raw.githubusercontent.com/idiotf/${name}/main/build/${json.icons[128]}`
  }
}

export const GithubExtension = async ({ id }: {
  id: string
}) => {
  const { name, description, image } = await getGithubExtData(id)

  return (
    <div className='h-full flex items-center gap-4 p-4'>
      {image && (
        <Image
          src={image}
          alt={`${name} 아이콘`}
          width={64}
          height={64}
          className='size-16'
        />
      )}
      <div>
        <p className='text-base font-medium'>{name}</p>
        <p className='text-[14px] mt-2'>{description}</p>
      </div>
    </div>
  )
}

export const GithubExtLoading = () =>
  <div className='h-full flex items-center gap-4 p-4 not-dark:brightness-90'>
    <Skeleton className='size-16 rounded-[12px]' />
    <div>
      <Skeleton className='w-32 h-6' />
      <Skeleton className='w-64 h-[21px] mt-2' />
    </div>
  </div>

const GithubExtensionItem = ({ id }: { id: string }) =>
  <li className='min-h-24 relative bg-[#f0f4f9] dark:bg-[#181819] rounded-[20px] hover:before:bg-[#444746] hover:before:opacity-8 hover:before:block hover:before:absolute hover:before:inset-0 hover:before:rounded-[20px] active:before:opacity-10'>
    <Link href={`https://github.com/idiotf/${id}`} target='_blank' className='absolute rounded-[20px] w-full h-full z-10' />
    <Suspense fallback={<GithubExtLoading />}>
      <ErrorBoundary errorComponent={ErrorComponent}>
        <GithubExtension id={id} />
      </ErrorBoundary>
    </Suspense>
  </li>

const GithubSiteItem = ({ id, name, description }: GithubSiteData) =>
  <li className='min-h-24 relative bg-[#f0f4f9] dark:bg-[#181819] rounded-[20px] hover:before:bg-[#444746] hover:before:opacity-8 hover:before:block hover:before:absolute hover:before:inset-0 hover:before:rounded-[20px] active:before:opacity-10'>
    <Link href={`https://github.com/idiotf/${id}`} target='_blank' className='absolute rounded-[20px] w-full h-full z-10' />
    <div className='h-full flex items-center gap-4 p-4'>
      <div>
        <p className='text-base font-medium'>{name}</p>
        <p className='text-[14px] mt-2'>{description}</p>
      </div>
    </div>
  </li>

export const GithubExtensionList = ({ list }: { list: (string | GithubSiteData)[] }) =>
  <ul className='grid grid-cols-2 max-[42rem]:grid-cols-1 gap-[21px] mt-6'>
    {list.map(id => typeof id == 'string' ? <GithubExtensionItem key={id} id={id} /> : <GithubSiteItem key={id.id} {...id} />)}
  </ul>

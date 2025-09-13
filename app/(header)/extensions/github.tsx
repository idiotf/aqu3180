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

interface GithubManifestData {
  id: string
  baseUrl: string
}

interface GithubSiteData {
  id: string
  name: string
  description: string
}

async function getGithubExtData(id: string, baseUrl = 'build'): Promise<GithubExtData> {
  const res = await fetch(`https://raw.githubusercontent.com/idiotf/${id}/main/${baseUrl}/manifest.json`)
  const json = await res.json()

  return {
    name: json.name,
    description: json.description,
    image: json.icons && `https://raw.githubusercontent.com/idiotf/${id}/main/${baseUrl}/${json.icons[128]}`
  }
}

export const GithubExtension = async ({ id, baseUrl }: {
  id: string
  baseUrl?: string
}) => {
  const { name, description, image } = await getGithubExtData(id, baseUrl)

  return <>
    <Link href={`https://github.com/idiotf/${id}`} target='_blank' aria-label={name} className='absolute rounded-[20px] w-full h-full z-10' />
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
  </>
}

export const GithubExtLoading = ({ id }: { id: string }) => <>
  <Link href={`https://github.com/idiotf/${id}`} target='_blank' className='absolute rounded-[20px] w-full h-full z-10' />
  <div className='h-full flex items-center gap-4 p-4 not-dark:brightness-90'>
    <Skeleton className='size-16 rounded-[12px] shrink-0' />
    <div className='w-64'>
      <Skeleton className='w-[min(128px,100%)] h-6' />
      <Skeleton className='w-full h-[21px] mt-2' />
    </div>
  </div>
</>

const GithubExtensionItem = ({ id, baseUrl }: {
  id: string
  baseUrl?: string
}) =>
  <li className='min-h-24 relative bg-[#f0f4f9] dark:bg-[#181819] rounded-[20px] hover:before:bg-[#444746] hover:before:opacity-8 hover:before:block hover:before:absolute hover:before:inset-0 hover:before:rounded-[20px] active:before:opacity-10'>
    <Suspense fallback={<GithubExtLoading id={id} />}>
      <ErrorBoundary errorComponent={ErrorComponent}>
        <GithubExtension id={id} baseUrl={baseUrl} />
      </ErrorBoundary>
    </Suspense>
  </li>

const GithubSiteItem = ({ id, name, description }: GithubSiteData) =>
  <li className='min-h-24 relative bg-[#f0f4f9] dark:bg-[#181819] rounded-[20px] hover:before:bg-[#444746] hover:before:opacity-8 hover:before:block hover:before:absolute hover:before:inset-0 hover:before:rounded-[20px] active:before:opacity-10'>
    <Link href={`https://github.com/idiotf/${id}`} target='_blank' aria-label={name} className='absolute rounded-[20px] w-full h-full z-10' />
    <div className='h-full flex flex-col justify-center p-4'>
      <p className='text-base font-medium'>{name}</p>
      <p className='text-[14px] mt-2'>{description}</p>
    </div>
  </li>

export const GithubExtensionList = ({ list }: { list: (string | GithubSiteData | GithubManifestData)[] }) =>
  <ul className='grid grid-cols-2 max-[42rem]:grid-cols-1 gap-[21px] mt-6'>
    {list.map(item =>
      typeof item == 'string' ? <GithubExtensionItem key={item} id={item} />
    : 'description' in item ? <GithubSiteItem key={item.id} {...item} />
    : <GithubExtensionItem key={item.id} {...item} />
    )}
  </ul>

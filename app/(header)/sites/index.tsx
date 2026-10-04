import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

interface SiteData {
  name: string
  link: string
  description: string
  isBeta?: boolean
}

export const SiteInfo = ({ name, link, description, isBeta }: SiteData) => <>
  <Link href={link} target='_blank' aria-label={name} className='absolute rounded-[20px] w-full h-full z-10' />
  <div className='h-full flex flex-col justify-center p-4 relative'>
    <p className='text-base font-medium'>
      {name}
      {isBeta && (
        <Badge className='float-right'>Beta</Badge>
      )}
    </p>
    <p className='text-[14px] mt-2'>{description}</p>
  </div>
</>

export const SiteList = ({ list }: { list: SiteData[] }) =>
  <ul className='grid grid-cols-[repeat(auto-fit,minmax(256px,1fr))] gap-[21px] mt-6'>
    {list.map((info) =>
      <li
        key={info.link}
        className='relative bg-[#f0f4f9] dark:bg-[#181819] rounded-[20px] hover:before:bg-[#444746] hover:before:opacity-8 hover:before:block hover:before:absolute hover:before:inset-0 hover:before:rounded-[20px] active:before:opacity-10'
      >
        <SiteInfo {...info} />
      </li>
    )}
  </ul>

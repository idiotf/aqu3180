import Link from 'next/link'
import { sites } from '@/app/list.json'

interface SiteData {
  name: string
  link: string
  description: string
}

export const SiteInfo = ({ name, description }: {
  name: string
  description: string
}) =>
  <div className='h-full flex flex-col justify-center p-4 relative'>
    <p className='text-base font-medium'>{name}</p>
    <p className='text-[14px] mt-2'>{description}</p>
  </div>

export const SiteList = ({ list }: { list: SiteData[] }) =>
  <ul className='grid grid-cols-[repeat(auto-fit,minmax(256px,1fr))] gap-[21px] mt-6'>
    {list.map(({ name, link, description }) => (
      <li key={link} className='relative bg-[#f0f4f9] dark:bg-[#181819] rounded-[20px] hover:before:bg-[#444746] hover:before:opacity-8 hover:before:block hover:before:absolute hover:before:inset-0 hover:before:rounded-[20px] active:before:opacity-10'>
        <Link href={link} target='_blank' className='absolute rounded-[20px] w-full h-full z-10' />
        <SiteInfo name={name} description={description} />
      </li>
    ))}
  </ul>

const Sites = () => <>
  <h1 className='text-4xl mt-16 mb-6 font-bold'>웹사이트</h1>
  <p className='text-neutral-700 dark:text-neutral-300'>오직 유저만을 위해 정성껏 만든 여러 가지 웹사이트입니다.</p>
  <SiteList list={sites} />
</>

export default Sites

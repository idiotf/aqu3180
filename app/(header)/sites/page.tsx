import { SiteList } from '.'
import list from '@/app/list.json'

const Sites = () => <>
  <h1 className='text-4xl mt-16 mb-6 font-bold'>웹사이트</h1>
  <p className='text-neutral-700 dark:text-neutral-300'>오직 유저만을 위해 정성껏 만든 여러 가지 웹사이트입니다.</p>
  <SiteList list={list.sites} />
</>

export default Sites

import { SiteList } from '../sites'
import { GithubExtensionList } from '../extensions/github'
import { WebStoreExtensionList } from '../extensions/webstore'
import { webTools, webStoreTools, githubTools } from '@/app/list'

const Sites = () => <>
  <h1 className='text-4xl mt-16 mb-6 font-bold'>도구</h1>
  <p className='text-neutral-700 dark:text-neutral-300'>단순한 일에도 편의를 더해 주는 여러 가지 도구입니다.</p>

  <h2 className='text-[28px] mt-12 mb-4 font-semibold'>웹사이트</h2>
  <SiteList list={webTools} />

  <h2 className='text-[28px] mt-12 mb-4 font-semibold'>크롬 웹스토어</h2>
  <WebStoreExtensionList list={webStoreTools} />

  <h2 className='text-[28px] mt-12 mb-4 font-semibold'>깃허브</h2>
  <p className='text-neutral-700 dark:text-neutral-300'>⚠️ 깃허브에만 올라온 확장은 아직 불안정하며 버그가 발생할 수 있습니다.</p>
  <GithubExtensionList list={githubTools} />
</>

export default Sites

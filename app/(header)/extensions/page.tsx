import { WebStoreExtensionList } from './webstore'
import { GithubExtensionList } from './github'
import { webStoreExtList, githubExtList } from '@/app/list'

const ExtensionList = () => <>
  <h1 className='text-4xl mt-16 mb-6 font-bold'>확장 프로그램</h1>
  <p className='text-neutral-700 dark:text-neutral-300'>엔트리 생활에 가치를 더해 주는 여러 가지 확장들입니다.</p>

  <h2 className='text-[28px] mt-12 mb-4 font-semibold'>크롬 웹스토어</h2>
  <WebStoreExtensionList list={webStoreExtList} />

  <h2 className='text-[28px] mt-12 mb-4 font-semibold'>깃허브</h2>
  <p className='text-neutral-700 dark:text-neutral-300'>⚠️ 깃허브에만 올라온 확장은 아직 불안정하며 버그가 발생할 수 있습니다.</p>
  <GithubExtensionList list={githubExtList} />
</>

export default ExtensionList

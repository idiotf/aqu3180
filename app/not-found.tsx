import Link from 'next/link'
import Image from 'next/image'
import HeaderLayout from './(header)/layout'
import { Button } from '@/components/ui/button'
import error404 from './kawaii-error-images/404.png'

const NotFound = () =>
  <HeaderLayout className='flex h-min items-center'>
    <div className='flex-1 h-min'>
      <h1 className='text-4xl mt-16 mb-6 font-bold break-keep'>페이지를 찾지 못했습니다.</h1>
      <p className='text-neutral-700 dark:text-neutral-300 my-6 break-keep'>이 페이지는 aqu3180이 창조하지 않은 페이지인 것 같습니다.</p>
      <Button className='cursor-pointer' asChild>
        <Link href='/'>홈페이지로 이동</Link>
      </Button>
    </div>
    <figure className='w-1/2 max-[56rem]:w-[calc(75%-218px)] max-[50rem]:w-[calc(100%-412px)] max-[40rem]:hidden h-min'>
      <Image src={error404} alt='' priority className='aspect-video' />
      <figcaption className='text-center px-4'>Illustration by SAWARATSUKI</figcaption>
    </figure>
  </HeaderLayout>

export default NotFound

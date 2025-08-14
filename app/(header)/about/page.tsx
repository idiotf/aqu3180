import Link from 'next/link'
import Logo from '@/app/logo'
import Image from 'next/image'
import nextJSLogo from '../third-party-logo/nextjs.png'
import TypeScriptLogo from '../third-party-logo/typescript'
import TailwindcssLogo from '../third-party-logo/tailwindcss'
import ShadcnLogo from '../third-party-logo/shadcn'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Aqu3180Text from '@/app/aqu3180-text'

const FrameworkCard = ({ image, name, width, height, link }: {
  name: string
  image: string | StaticImport | React.ReactNode
  width?: number
  height?: number
  link: string
}) =>
  <li className='p-4 border rounded-2xl flex flex-col items-center relative transition duration-200 hover:scale-105'>
    <Link href={link} className='absolute inset-0 rounded-2xl' target='_blank' aria-label={name} />
    {image && typeof image == 'object' && ('src' in image || 'default' in image) ? <Image
      src={image}
      width={width}
      height={height}
      alt=''
      className='size-32 mt-4'
    /> : image}
    <h3 className='my-4 font-medium'>{name}</h3>
  </li>

const AboutPage = () => <>
  <div className='mt-16 flex'>
    <Logo className='w-1/3' />
    <div className='w-2/3 p-[5vw]'>
      <h1>
        <Aqu3180Text className='w-full h-min' />
      </h1>
      <p className='text-xl mt-[2vw]'>안녕하세요. 저는 aqu3180입니다.</p>
    </div>
  </div>
  <h2 className='text-3xl font-semibold text-center my-4'>좋아하는 프레임워크</h2>
  <ul className='grid grid-cols-[repeat(auto-fit,minmax(194px,1fr))] gap-8 my-16'>
    <FrameworkCard
      name='Next.js'
      image={nextJSLogo}
      link='https://nextjs.org'
    />
    <FrameworkCard
      name='TypeScript'
      image={<TypeScriptLogo className='size-32 mt-4' />}
      link='https://www.typescriptlang.org'
    />
    <FrameworkCard
      name='Tailwindcss'
      image={<TailwindcssLogo className='size-32 mt-4' />}
      link='https://tailwindcss.com'
    />
    <FrameworkCard
      name='Shadcn'
      image={<ShadcnLogo className='size-32 mt-4' />}
      link='https://ui.shadcn.com'
    />
  </ul>
</>

export default AboutPage

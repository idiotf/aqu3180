import Link from 'next/link'
import Logo from '@/app/logo'
import Aqu3180Text from '@/app/aqu3180-text'

import NextJSLogo from '@/assets/3rd-party-logos/nextjs'
import TypeScriptLogo from '@/assets/3rd-party-logos/typescript'
import TailwindcssLogo from '@/assets/3rd-party-logos/tailwindcss'
import ShadcnLogo from '@/assets/3rd-party-logos/shadcn'

const FrameworkCard = ({ image, name, link }: {
  name: string
  image: React.ReactNode
  width?: number
  height?: number
  link: string
}) =>
  <li className='p-4 border rounded-2xl flex flex-col items-center relative transition duration-200 hover:scale-105'>
    <Link href={link} className='absolute inset-0 rounded-2xl z-10' target='_blank' aria-label={name} />
    {image}
    <h3 className='my-4 font-medium'>{name}</h3>
  </li>

const AboutPage = () => <>
  <div className='mt-16 max-[30rem]:my-8 flex'>
    <Logo className='w-1/3' />
    <div className='w-2/3 p-[min(5vw,64px)]'>
      <h1>
        <Aqu3180Text className='w-full h-min' />
      </h1>
      <p className='text-xl mt-[min(2vw,32px)]'>안녕하세요. 저는 aqu3180입니다.</p>
    </div>
  </div>
  <h2 className='text-3xl font-semibold text-center my-4'>좋아하는 프레임워크</h2>
  <ul className='grid grid-cols-[repeat(auto-fit,minmax(194px,1fr))] gap-8 my-16 max-lg:mt-[calc(12.5vw-64px)] max-md:mt-8'>
    <FrameworkCard
      name='Next.js'
      image={<NextJSLogo className='size-32 mt-4 opacity-90' />}
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

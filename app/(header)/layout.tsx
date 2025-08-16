import Link from 'next/link'
import Image from 'next/image'

import Logo from '@/app/logo'
import Aqu3180Text from '@/app/aqu3180-text'

import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import entryLogo from './third-party-logo/entry.png'
import GithubLogo from './third-party-logo/github'

const NavigationItem = ({ children, href }: React.PropsWithChildren<{
  href: string
}>) =>
  <li>
    <Button variant='ghost' className='cursor-pointer' asChild>
      <Link href={href}>
        {children}
      </Link>
    </Button>
  </li>

const Profiles = () => <>
  <Link href='https://playentry.org/profile/65d07bfd11787000264734c1' target='_blank' aria-label='엔트리 계정'>
    <Image
      src={entryLogo}
      alt='@entry'
      width={512}
      height={512}
      className='size-8'
    />
  </Link>
  <Link href='https://github.com/idiotf' target='_blank' aria-label='Github 계정'>
    <GithubLogo className='size-8 fill-foreground' />
  </Link>
</>

const HeaderMenu = () =>
  <Popover>
    <PopoverTrigger aria-label='메뉴'>
      <Menu className='size-8 cursor-pointer' />
    </PopoverTrigger>
    <PopoverContent className='w-28 flex justify-between'>
      <Profiles />
    </PopoverContent>
  </Popover>

const SheetItem = ({ children, href }: React.PropsWithChildren<{
  href: string
}>) =>
  <li>
    <SheetClose asChild>
      <Button variant='ghost' className='cursor-pointer w-full justify-start' asChild>
        <Link href={href}>
          {children}
        </Link>
      </Button>
    </SheetClose>
  </li>

const HeaderSheet = () =>
  <Sheet>
    <SheetTrigger aria-label='메뉴'>
      <Menu className='size-8 cursor-pointer' />
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>메뉴</SheetTitle>
        <SheetDescription />
      </SheetHeader>
      <div className='px-2'>
        <ul className='-mt-4'>
          <SheetItem href='/about'>소개</SheetItem>
          <SheetItem href='/extensions'>확장 프로그램</SheetItem>
          <SheetItem href='/sites'>웹사이트</SheetItem>
          <SheetItem href='/tools'>도구</SheetItem>
        </ul>
        <div className='w-25.5 p-3 flex justify-between'>
          <Profiles />
        </div>
      </div>
    </SheetContent>
  </Sheet>

const separatorStyle = {
  height: 'calc(var(--spacing) * 12)',
}

const HeaderLayout = ({
  children,
  className,
  params, // eslint-disable-line @typescript-eslint/no-unused-vars
  ...props
}: React.PropsWithChildren<React.HTMLProps<HTMLElement>> & { params?: unknown }) =>
  <main className='min-h-full'>
    <header className='border-b sticky max-[30rem]:top-0 bg-background z-20'>
      <nav className='p-3 flex items-center justify-between m-auto max-w-[1024px]'>
        <div className='w-32 flex max-md:w-[calc(50%-244px)] max-sm:w-16 text-[0px]'>
          <Link href='/' className='inline-block w-min' aria-label='aqu3180 홈'>
            <Logo className='size-12' />
          </Link>
        </div>
        <ul className='flex-1 flex items-center justify-evenly max-[30rem]:hidden'>
          <NavigationItem href='/about'>소개</NavigationItem>
          <NavigationItem href='/extensions'>확장 프로그램</NavigationItem>
          <NavigationItem href='/sites'>웹사이트</NavigationItem>
          <NavigationItem href='/tools'>도구</NavigationItem>
        </ul>
        <div className='w-32 flex justify-between max-sm:hidden'>
          <Profiles />
          <Popover>
            <PopoverTrigger aria-label='메뉴'>
              <Menu className='size-8 cursor-pointer' />
            </PopoverTrigger>
            <PopoverContent className='w-48 text-center'>여기에 뭘 넣을까요</PopoverContent>
          </Popover>
        </div>
        <div className='w-16 flex min-sm:hidden justify-end max-[30rem]:hidden'>
          <HeaderMenu />
        </div>
        <div className='w-16 flex justify-end min-[30rem]:hidden'>
          <HeaderSheet />
        </div>
      </nav>
    </header>
    <section {...props} className={cn('px-3 m-auto max-w-[1024px]', className)}>
      {children}
    </section>
    <footer className='mt-12 border-t'>
      <nav className='flex flex-wrap gap-5 items-center p-3 py-8 m-auto max-w-[1024px] min-h-28'>
        <div className='flex justify-start gap-4'>
          <Logo className='size-12' />
          <Aqu3180Text className='w-min h-12' />
        </div>
        <Separator orientation='vertical' style={separatorStyle} />
        <Button variant='ghost' className='cursor-pointer' asChild>
          <Link href='/entryjs-uwu' target='_blank'>Entryjs uwu 로고</Link>
        </Button>
        <Separator orientation='vertical' style={separatorStyle} />
        <p className='text-sm'>
          참고로 Entryjs uwu 로고는 SAWARATSUKI님에게<br />
          영감을 받아서 직접 만들어 보았습니다
        </p>
        <Separator orientation='vertical' style={separatorStyle} />
        <p className='text-sm'>
          근데 여기에 뭘 넣을까요
        </p>
      </nav>
    </footer>
  </main>

export default HeaderLayout

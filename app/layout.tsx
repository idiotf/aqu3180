import { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import ogImage from '@/public/og-image.png'
import './globals.css'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
})

const title = {
  default: 'aqu3180',
  template: '%s | aqu3180',
}

const url = new URL('https://www.aqu3180.co.kr')

export const metadata: Metadata = {
  metadataBase: url,
  title,
  description: 'aqu3180의 홈페이지',
  icons: '/icon.svg',
  openGraph: {
    type: 'website',
    url,
    title,
    description: 'aqu3180의 홈페이지',
    siteName: 'aqu3180',
    locale: 'ko_KR',
    images: {
      url: ogImage.src,
      width: ogImage.width,
      height: ogImage.height,
      alt: 'aqu3180',
    },
  },
}

const RootLayout = ({ children }: React.PropsWithChildren) =>
  <html
    lang='ko'
    className='h-full'
    suppressHydrationWarning
  >
    <body
      className={cn(notoSansKR.className, 'antialiased h-full')}
    >
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </body>
  </html>

export default RootLayout

import { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'aqu3180',
  description: 'aqu3180의 홈페이지',
  icons: '/icon.svg',
}

const RootLayout = ({ children }: React.PropsWithChildren) =>
  <html
    lang='ko'
    className='h-full'
    suppressHydrationWarning
  >
    <body
      className={`${notoSansKR.className} antialiased h-full`}
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

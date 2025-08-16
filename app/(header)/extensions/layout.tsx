import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '확장 프로그램',
}

const Layout = ({ children }: React.PropsWithChildren) => children
export default Layout

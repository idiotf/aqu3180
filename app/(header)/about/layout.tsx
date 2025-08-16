import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '소개',
}

const Layout = ({ children }: React.PropsWithChildren) => children
export default Layout

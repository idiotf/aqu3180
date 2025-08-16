import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '웹사이트',
}

const Layout = ({ children }: React.PropsWithChildren) => children
export default Layout

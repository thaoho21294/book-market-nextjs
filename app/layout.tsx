import React, { ReactNode } from 'react'
import { Footer } from 'components/layout'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      @ts-expect-error Server Component
      {/* <Header /> */}
      <main>{children}</main>
      <Footer />
    </>
  )
}

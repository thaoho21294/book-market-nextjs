import React, { ReactNode } from 'react'
import Footer from 'components/layout/Footer/Footer'
import Header from 'components/layout/Header/Header'

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      {/* @ts-expect-error Server Component*/}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

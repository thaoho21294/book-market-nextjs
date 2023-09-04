import React, { ReactNode } from 'react'
import Footer from 'components/layout/Footer/Footer'
import Header from 'components/layout/Header/Header'
import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

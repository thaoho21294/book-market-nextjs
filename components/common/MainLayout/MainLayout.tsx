import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout

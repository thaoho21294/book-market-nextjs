import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../Footer'
import Header from '../Header'

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout

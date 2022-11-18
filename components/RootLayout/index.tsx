import React from 'react'
import Navbar from '../Navbar'

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <>Your footer here</>
    </>
  )
}

export default RootLayout

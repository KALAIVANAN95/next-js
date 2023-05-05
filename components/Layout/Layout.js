import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar.js/Navbar'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer/>
    </div>
  )
}

export default Layout
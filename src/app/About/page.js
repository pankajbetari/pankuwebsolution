import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Aboutcom from '../component/Aboutcom'
import Titlebanner from '../component/Titlebanner'
const page = () => {
  return (
    <>
      <Header />


      <Titlebanner
        Title="About"
        Desc="This is a about page"
      />


      <Aboutcom />

      <Footer />
    </>
  )
}

export default page

import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Servicecom from '../component/Servicecom'
import Titlebanner from '../component/Titlebanner'

const page = () => {
  return (
    <div>
      <Header/>
      <Titlebanner
        Title="Service"
        Desc="This is a Service page"
      />
      <Servicecom/>
      <Footer/>
    </div>
  )
}

export default page

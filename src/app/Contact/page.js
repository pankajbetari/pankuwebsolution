import React from 'react'
import Header from '../component/Header'
import Titlebanner from '../component/Titlebanner'
import Footer from '../component/Footer'
import Form from '../component/Form'

const page = () => {
    return (
        <div>
            <Header />
            <Titlebanner
                Title="Contact Us"
                Desc="This is a Contact us page"
            />
            {/* contact detail section */}
            <div >

            </div>



            <Form />
            <Footer />
        </div>
    )
}

export default page

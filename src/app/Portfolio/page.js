import React from 'react'
import Image from 'next/image'
import foliopagestyle from "@/app/Portfolio/foliostyle.module.css"
import Header from '../component/Header'
import Titlebanner from '../component/Titlebanner'
import Footer from '../component/Footer'

const page = () => {
    return (
        <div>
            <Header />
            <Titlebanner Title="Portfolio"
                Desc="This is a portfolio Page"
            />


            <div className={foliopagestyle.container_heading}>
                <h2>Our Recent Works</h2>
                <span></span>
            </div>


            <div className={foliopagestyle.container}>
                <div className={foliopagestyle.container_box}>
                    <div className={foliopagestyle.container_box_image}>
                       <Image src="/project1.png" width={350} height={300} alt='image'/>
                    </div>

                    <div className={foliopagestyle.container_box_detail}>
                        <span>Portfolio Website</span>
                        <span>Technology - React and Nextjs  </span>
                    </div>
                </div>
                <div className={foliopagestyle.container_box}>
                    <div className={foliopagestyle.container_box_image}>
                       <Image src="/project3.png" width={350} height={300} alt='image'/>
                    </div>

                    <div className={foliopagestyle.container_box_detail}>
                        <span>Company Website</span>
                        <span>Technology - React and Nextjs  </span>
                    </div>
                </div>
                <div className={foliopagestyle.container_box}>
                    <div className={foliopagestyle.container_box_image}>
                       <Image src="/project2.png" width={350} height={300} alt='image'/>
                    </div>

                    <div className={foliopagestyle.container_box_detail}>
                        <span>E- commerce Website</span>
                        <span>Technology - React and Nextjs  </span>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default page

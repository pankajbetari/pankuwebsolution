import React from 'react'
import Link from 'next/link'
import bannerstyle from "@/app/style/banner.module.css"
import experianpagestyle from "@/app/style/experianstyle.module.css"

const Experian = () => {
    return (
        <>
            <div className={experianpagestyle.container}>

                <div className={experianpagestyle.container_left}>
                    <h2>Actionable Reports to Grow your Business</h2>
                    <p><b>Panku Web Solution </b>–  Your trusted partner for fast, modern, and results-driven websites & web apps. We build smart digital solutions to grow your business online..</p>
                    <div className={bannerstyle.btn_contact} style={{ marginLeft: "33px" }}>
                        <Link href="Contact">Get Start </Link>
                    </div>
                </div>


                <div className={experianpagestyle.container_right}>
                    <div className={experianpagestyle.container_right_contain}>
                        <div className={experianpagestyle.container_right_contain_box}>
                          <h2>9/10</h2>
                          <p>Overall our customer satisfaction score</p>
                        </div>

                        <div className={experianpagestyle.container_right_contain_box}>
                          <h2>15K+</h2>
                          <p>Happy our  customer in worldwide</p>
                        </div>
                    </div>

                    <div className={experianpagestyle.container_right_contain}>
                    <div className={experianpagestyle.container_right_contain_box}>
                          <h2>95%</h2>
                          <p>Our Customer customer satisfaction score</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Experian

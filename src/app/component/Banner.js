import React from 'react'
import Link from 'next/link'
import bannerstyle from "@/app/style/banner.module.css"

const Banner = () => {
  return (
    <>
      <div className={bannerstyle.container}>

        <div className={bannerstyle.container_left}>
          <h1>WelCome to  <span>PankuWeb<small>Solution</small></span></h1>
          <p><span>Need a website that works? We build beautiful,
            user-friendly sites that grow your business. </span></p>

          <div className={bannerstyle.btn_flex}>
            <div className={bannerstyle.btn_contact}>
              <Link href="Contact"> Contact Us </Link>
            </div>
            <div className={bannerstyle.btn}>
              <Link href="About"> Learn More</Link>
            </div>

          </div>
        </div>

      </div>

    </>
  )
}

export default Banner

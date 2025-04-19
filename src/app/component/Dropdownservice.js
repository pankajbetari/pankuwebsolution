import React from 'react'
import Link from 'next/link'
import dropdownstyle from "@/app/style/header.module.css"

const Dropdownservice = () => {
    return (
        <div className={dropdownstyle.container}>

            <div className={dropdownstyle.container_service1}>
                <Link href="/">
                    Website development
                </Link>
            </div>


            <div className={dropdownstyle.container_service2}>
                <Link href="/">
                    App Development
                </Link>
            </div>


            <div className={dropdownstyle.container_service3}>
                <Link href="/">
                    Digital marketing
                </Link>
            </div>


            <div className={dropdownstyle.container_service4}>
                <Link href="/">
                    Logo Design
                </Link>
            </div>
        </div>
    )
}

export default Dropdownservice

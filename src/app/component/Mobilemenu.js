import React from 'react'
import Link from 'next/link'
import headmobilestyle from "@/app/style/header.module.css"
const Mobilemenu = () => {
  return (
    <div className={headmobilestyle.container_mobile}>
     <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="About">About</Link></li>
        <li><Link href="Service">Service</Link></li>
        <li><Link href="Portfolio">Portfolio</Link></li>
        <li><Link href="Contact">Contact Us</Link></li>
     </ul>
    </div>
  )
}

export default Mobilemenu

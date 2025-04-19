"use client"
import {React, useState } from 'react';
import Link from 'next/link'
import { RiMenu2Line } from "react-icons/ri";
import headstyle from "@/app/style/header.module.css"
import Dropdownservice from './Dropdownservice'
import Mobilemenu from './Mobilemenu';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className={headstyle.head_container}>

            <div className={headstyle.head_container_mobilemenu}>
                <span onClick={toggleMenu}><RiMenu2Line style={{ height: "30px", width: "30px" }} /></span>
                {/* className={`${headerstyle.mobile_menu} ${isOpen ? headerstyle.mobile_menu_open: ''}`} */}

                <div className={`${headstyle.head_container_mobilemenu_container} ${isOpen? headstyle.mobile_menu_open : ""}`}>
                    <Mobilemenu />
                </div>
            </div>

            <div className={headstyle.head_logo}>
                <Link href="/">
                    <span>PankuWeb</span><small>solution</small>
                </Link>
            </div>

            <div className={headstyle.head_menu}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="About">About</Link></li>

                    <li className={headstyle.service}>
                        <Link href="Service ">Service</Link>
                        <div className={headstyle.Dropdownservice}>
                            <Dropdownservice />
                        </div>
                    </li>

                    <li><Link href="Portfolio">Portfolio</Link></li>
                    <li><Link href="Contact">Contact Us</Link></li>
                </ul>
            </div>

            <div className={headstyle.head_query}>
                <Link href="Contact_query">
                    <div> Query</div>
                </Link>
            </div>


        </div>
    )
}

export default Header

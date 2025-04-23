import React from 'react'
import Link from 'next/link'
import headstyle from "@/app/style/header.module.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import footerstyle from "@/app/style/footer.module.css"

const Footer = () => {
    return (
        <>
            <div className={footerstyle.container}>

                <div className={footerstyle.container_footer_detail}>

                    <div className={footerstyle.container_footer_detail_box1}>

                        <div className={headstyle.head_logo}>
                            <Link href="/">
                                <span>PankuWeb</span><small>solution</small>
                            </Link>
                        </div>
                        {/* <div>PankuWebsolution</div> */}

                        <p>Founded 15 years ago and headquartered in the Safdarjung
                            Development Area, New Delhi, Global Web Technologies LLP

                            and innovative digital experiences for mid-size to large-scale
                            enterprises.</p>

                        <div>
                            <ul>
                                <li><Link href="/"><span><FaFacebookSquare style={{ width: "35px", height: "30px", color: "black" }} className={footerstyle.icon} /></span></Link></li>
                                <li><Link href="/"><span><FaSquareInstagram style={{ width: "35px", height: "30px", color: "black" }} className={footerstyle.icon} /></span></Link></li>
                                <li><Link href="/"><span>< FaSquareYoutube style={{ width: "35px", height: "30px", color: "black" }} className={footerstyle.icon} /></span></Link></li>
                                <li><Link href="/"><span><FaSquareWhatsapp style={{ width: "35px", height: "30px", color: "black" }} className={footerstyle.icon} /></span></Link></li>
                            </ul>
                        </div>

                    </div>


                    <div className={footerstyle.container_footer_detail_box2}>
                        <div style={{ fontWeight: "bold" , color:"#000" }}>Quick Link</div>
                        <div>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/">About</Link></li>
                                <li><Link href="/">Service</Link></li>
                                <li><Link href="/">Portfolio</Link></li>
                                <li><Link href="/">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>


                    <div className={footerstyle.container_footer_detail_box2}>
                        <div style={{ fontWeight: "bold" , color:"#000" }}>Our Service</div>
                        <div>
                            <ul>
                                <li><Link href="/">E- Commerce</Link></li>
                                <li><Link href="/">Single Page Website</Link></li>
                                <li><Link href="/">Landing Page</Link></li>
                                <li><Link href="/">Apps Development</Link></li>
                                <li><Link href="/">Digital Marketing</Link></li>
                            </ul>
                        </div>
                    </div>


                    <div className={footerstyle.container_footer_detail_box3}>

                        <div style={{ fontWeight: "bold" , color:"#000" }}>Address</div>
                        <div>
                            <ul>
                                <li>
                                    <span>< FaLocationDot  style={{  color:"#000" }} size={30}/></span>
                                    <p>

                                        3rd floor, Naya bans ,sector-15 Noida Gautam
                                        Budh Nagar ,Utter pradesh -201301
                                    </p>
                                </li>
                                <li> <span><  IoCallSharp  style={{  color:"#000" }} size={30}/></span>
                                    <p>  + 91 0000000000 </p></li>
                                <li><span><  MdEmail  style={{  color:"#000" }} size={30}/></span>
                                    <p>support@pankuwebgmail.com</p> </li>

                            </ul>
                        </div>
                    </div>

                    {/* <div className={footerstyle.container_footer_detail_box4}></div> */}


                </div>


                <div className={footerstyle.container_footer_copyright}>
                    <p>&copy; 2024 www.PankuWebsolution.com || All Rights Reserved | Designed By PankuWebsolution</p>
                </div>
            </div>







        </>
    )
}

export default Footer

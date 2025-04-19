import React from 'react'
import Image from 'next/image'
import { CgWebsite } from "react-icons/cg";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { IoMdMegaphone } from "react-icons/io";
import servicepagestyle from "@/app/style/servicestyle.module.css"

const Servicecom = () => {
    return (
        <>
            <div className={servicepagestyle.container}>
                <div className={servicepagestyle.container_box}>
                  <span ><CgWebsite  style={{width: "100%" , color:"blue" , height:"50px"}}/></span>

                  <h2>WEBSITE DEVELOPMENT</h2>

                  <p>At PankuWeb<small>Solution</small>, we offer comprehensive web development services that transform ideas into high-performing digital solutions.</p>


                </div>


                <div className={servicepagestyle.container_box}>
                  <span ><MdOutlineAppSettingsAlt  style={{width: "100%" , color:"blue" , height:"50px"}}/></span>

                  <h2>APP DEVELOPMENT</h2>

                  <p>At PankuWeb<small>Solution</small>, we offer comprehensive web development services that transform ideas into high-performing digital solutions.</p>


                </div>




                <div className={servicepagestyle.container_box}>
                  <span ><IoMdMegaphone   style={{width: "100%" , color:"blue" , height:"50px"}}/></span>

                  <h2>DIGITAL MARKETING</h2>

                  <p>At PankuWeb<small>Solution</small>, we offer comprehensive web development services that transform ideas into high-performing digital solutions.</p>


                </div>
            </div>

        </>
    )
}

export default Servicecom

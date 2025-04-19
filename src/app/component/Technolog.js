import React from 'react'
import Image from 'next/image';
import { FaReact } from "react-icons/fa";
import techpagestyle from "@/app/style/techstyle.module.css"

const Technolog = () => {
    return (
        <>
            <div className={techpagestyle.container}>

                <div className={techpagestyle.container_head}>
                    <h2>We are development experts on all technologies.</h2>
                </div>

                <div className={techpagestyle.container_detail}>
                    <div className={techpagestyle.container_detail_left}>

                        <div className={techpagestyle.container_detail_left_box}>

                            <div className={techpagestyle.container_detail_left_box_icon}>
                                <span><  FaReact style={{ width: "40px", height: "50px" }} /></span>
                            </div>

                            <div className={techpagestyle.container_detail_left_box_head}>
                                <h3>React and Next js</h3>
                                <p>Panku Web Solution - Expert React and Next js development for fast, secure & scalable web apps. We turn your ideas into powerful digital solutions.</p>
                            </div>

                        </div>


                        <div className={techpagestyle.container_detail_left_box}>

                            <div className={techpagestyle.container_detail_left_box_icon}>
                                <span><  FaReact style={{ width: "40px", height: "50px" }} /></span>
                            </div>

                            <div className={techpagestyle.container_detail_left_box_head}>
                                <h3>PHP DEVELOPMENT</h3>
                                <p>Panku Web Solution - Expert PHP development for fast, secure & scalable web apps. We turn your ideas into powerful digital solutions.</p>
                            </div>

                        </div>


                        <div className={techpagestyle.container_detail_left_box}>

                            <div className={techpagestyle.container_detail_left_box_icon}>
                                <span><  FaReact style={{ width: "40px", height: "50px" }} /></span>
                            </div>

                            <div className={techpagestyle.container_detail_left_box_head}>
                                <h3>WORDPRESS</h3>
                                <p>Panku Web Solution - Expert CMS development for fast, secure & scalable web apps. We turn your ideas into powerful digital solutions.</p>
                            </div>

                        </div>

                    </div>





                    <div className={techpagestyle.container_detail_right}>
                        <Image src="/homebanner.avif" width={400} height={400} alt='image' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Technolog

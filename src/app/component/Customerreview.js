import React from 'react'
import Image from 'next/image'
import { FaRegStar } from "react-icons/fa6";
import reviewstyle from "@/app/style/review.module.css"

const Customerreview = () => {
    return (
        <>
            <div className={reviewstyle.container}>

                <div className={reviewstyle.container_head}>
                    <h2>Our Happy Client</h2>
                </div>


                <div className={reviewstyle.container_review}>
                    <div className={reviewstyle.container_review_box}>

                        <div className={reviewstyle.container_review_box_img}>
                            <Image src="/girl2.jpg" width={80} height={100} alt='image' />
                        </div>
                        <h3>Josefa </h3>
                        <p>this is a very punchual and very very time on delivery  company </p>
                        <div style={{display:"flex"}}>
                            <span><FaRegStar style={{ height: "30", width: "30", color: "yellow" }} /></span>
                            <span><FaRegStar style={{ height: "30", width: "30", color: "yellow" }} /></span>
                            <span><FaRegStar style={{ height: "30", width: "30", color: "yellow" }} /></span>
                            <span><FaRegStar style={{ height: "30", width: "30", color: "yellow" }} /></span>
                            <span><FaRegStar style={{ height: "30", width: "30", color: "yellow" }} /></span>
                        </div>
                    </div>

                    <div className={reviewstyle.container_review_box}>

                        <div className={reviewstyle.container_review_box_img}>
                            <Image src="/girl2.jpg" width={80} height={100} alt='image' />
                        </div>
                        <h3>Josefa </h3>
                        <p>this is a very punchual and very very time on delivery  company </p>
                        <div style={{display:"flex"}}>
                            <span><FaRegStar style={{ height: "30", width: "30", color: "yellow" }} /></span>
                            <span><FaRegStar style={{ height: "30", width: "30", color: "yellow" }} /></span>
                            <span><FaRegStar style={{ height: "30", width: "30", color: "yellow" }} /></span>
                            <span><FaRegStar style={{ height: "30", width: "30", color: "yellow" }} /></span>
                            <span><FaRegStar style={{ height: "30", width: "30", color: "yellow" }} /></span>
                        </div>
                    </div>

                    <div className={reviewstyle.container_review_box}>

                        <div className={reviewstyle.container_review_box_img}>
                            <Image src="/girl2.jpg" width={80} height={100} alt='image' />
                        </div>
                        <h3>Josefa </h3>
                        <p>this is a very punchual and very very time on delivery  company </p>
                        <div style={{display:"flex"}}>
                            <span><FaRegStar style={{ height: "30", width: "30", color: "yellow" }} /></span>
                            <span><FaRegStar style={{ height: "30", width: "30", color: "yellow" }} /></span>
                            <span><FaRegStar style={{ height: "30", width: "30", color: "yellow" }} /></span>
                            <span><FaRegStar style={{ height: "30", width: "30", color: "yellow" }} /></span>
                            <span><FaRegStar style={{ height: "30", width: "30", color: "yellow" }} /></span>
                        </div>
                    </div>

                    <div className={reviewstyle.container_review_box}>

                        <div className={reviewstyle.container_review_box_img}>
                            <Image src="/girl2.jpg" width={80} height={100} alt='image' />
                        </div>
                        <h3>Josefa </h3>
                        <p>this is a very punchual and very very time on delivery  company </p>
                        <div style={{display:"flex"}}>
                            <span><FaRegStar style={{ height: "30", width: "30", color: "yellow" }} /></span>
                            <span><FaRegStar style={{ height: "30", width: "30", color: "yellow" }} /></span>
                            <span><FaRegStar style={{ height: "30", width: "30", color: "yellow" }} /></span>
                            <span><FaRegStar style={{ height: "30", width: "30", color: "yellow" }} /></span>
                            <span><FaRegStar style={{ height: "30", width: "30", color: "yellow" }} /></span>
                        </div>
                    </div>

                    
                </div>

            </div>
        </>
    )
}

export default Customerreview

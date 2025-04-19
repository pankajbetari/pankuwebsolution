"use client"
import React from 'react'
import Header from '../component/Header'
import formstyle from "@/app/Contact_query/contact.module.css"
import Form from '../component/Form'
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import footerstyle from "@/app/style/footer.module.css"


const page = () => {
    return (
        <>
            <Header />


            <div className={formstyle.container}>

                <div className={formstyle.container_left}>
                    <Form />
                    {/* <div className={formstyle.container_left_form}>
                        <h3>Write Your Query</h3>


                        <div className={formstyle.form_box}>

                            <div className={formstyle.form_field}>
                                <label htmlFor="Name">First name <span>*</span>  :  </label>
                                <input type='text'
                                    placeholder='Enter your First name'
                                    required
                                />

                            </div>

                            <div className={formstyle.form_field}>
                                <label htmlFor="Name">Last name   :  </label>
                                <input type='text'
                                    placeholder='Enter your Last name'
                                    required
                                />

                            </div>
                        </div>
                        <div className={formstyle.form_box}>

                            <div className={formstyle.form_field}>
                                <label htmlFor="Name">Phone<span>*</span>  :  </label>
                                <input type='text'
                                    placeholder='Enter your Phone'
                                    required
                                />

                            </div>

                            <div className={formstyle.form_field}>
                                <label htmlFor="Name">Email<span>*</span>  :  </label>
                                <input type='text'
                                    placeholder='Enter your Email'
                                    required
                                />

                            </div>
                        </div>

                        <div className={formstyle.form_field_area}>
                            <label htmlFor="Name">Message<span>*</span>  :  </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder='How Can we help you ?'
                                rows={6}
                                required
                            />

                        </div>

                        <div className={formstyle.form_btn}>
                            <button>Get in Touch</button>
                        </div>

                    </div> */}
                </div>



                <div className={formstyle.container_right}>
                    <div  className={formstyle.container_right_box}>
                        <div className={footerstyle.container_footer_detail_box3}>

                            <div style={{ fontWeight: "bold" }}>Address</div>
                            <div>
                                <ul>
                                    <li>
                                        <span>< FaLocationDot /></span>
                                        <p>

                                            3rd floor, Naya bans ,sector-15 Noida Gautam
                                            Budh Nagar ,Utter pradesh -201301
                                        </p>
                                    </li>
                                    <li> <span><  IoCallSharp /></span>
                                        <p>  + 91 0000000000 </p></li>
                                    <li><span><  MdEmail /></span>
                                        <p>support@pankuwebgmail.com</p> </li>

                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default page

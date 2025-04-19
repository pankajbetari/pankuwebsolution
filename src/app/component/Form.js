import React from 'react'
import formstyle from "@/app/Contact_query/contact.module.css"


const Form = () => {
  return (
    <div>
         <div className={formstyle.container_left_form}>
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

                    </div>
    </div>
  )
}

export default Form

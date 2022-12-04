import React from 'react'
import './Contact.css'
import { FormikConsumer, useFormik } from 'formik'
import * as Yup from "yup"
import Flash from 'react-reveal/Flash';

import {TbAlertTriangle } from "react-icons/tb";




const messageSchema = Yup.object({
    name: Yup.string().min(2).max(7).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    message: Yup.string().min(10).max(100).required("Please leave your query here"),
})

const initialValues = {
    name: "",
    email: "",
    message: "",
};

const Contact = () => {
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues:  initialValues,
        validationSchema: messageSchema,
        onSubmit: (values, action)=>{
            console.log(values)
            action.resetForm();
        }
        

       
    })

  return (
    <div className="contact">
      <div className="contact_image">
        <img
          src="/Images/message.png"
          alt="message_box"
          className="contact_image"
        />
      </div>
      <div className="contact_message">
        <div className="contact_outside">
          <div className="contact_header">
            <Flash><h1> Contact </h1></Flash>
          </div>

          <div className="uppersection">
            <form onSubmit={handleSubmit}>
              <div>
              <input
                className="input_name "
                type="text"
                name="name"
                placeholder=" Name"
                value={values.name}
                onBlur={handleBlur}
                onChange= {handleChange}
                required
              />
              {
                errors.name && touched.name ? <div> <TbAlertTriangle className='danger'/><p className='error-p'>{errors.name}</p></div> : ""
              }
              </div>
             <div>
             <input
                className="input_email "
                type="text"
                name="email"
               
                placeholder=" Email"
                value={values.email}
                onBlur={handleBlur}
                onChange= {handleChange}
              />
              {
                errors.email && touched.email ? <div> <TbAlertTriangle className='danger'/><p className='error-p'>{errors.email}</p> </div> : ""
              }
             </div>
              <div>
              <textarea
                name="message"
                
                rows="7"
                placeholder="Your Message"
                value={values.message}
                onBlur={handleBlur}
                onChange= {handleChange}
              />
              {
                errors.message && touched.message ?  <div><TbAlertTriangle className='danger'/><p className='error-p'>{errors.message}</p></div>: ""
              }
              </div>
              
              
               <button className="contact_btn" type='submit'> Submit </button>
            </form>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Contact

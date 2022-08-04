import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {CgInstagram} from 'react-icons/cg'
import {TbBrandLinkedin} from 'react-icons/tb'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fpq8yh5', 'template_hszfbjs', form.current, 'yhHDou4xjZ-4IE_cT')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      <h5 className='interests'>I am open to internship and co-op opportunities in SWE, SDE, Product Management, and Tech Consulting!</h5>
      
      <div className="container contact__container">
      
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kaylarose1116@gmail.com</h5>
            <a href="mailto:kaylarose1116@gmail.com" target='_blank'>Send A Message</a>
          </article>

          <article className='contact__option'>
            <TbBrandLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>kayla-lee1116</h5>
            <a href="https://www.linkedin.com/in/kayla-lee1116/" target='_blank'>Connect With Me</a>
          </article>

          <article className='contact__option'>
            <CgInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>kayla_1116</h5>
            <a href="https://www.instagram.com/kayla_1116/" target='_blank'>Direct Message Me</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name='email' placeholder='Email' required/>
          <input type="subject" name="subject" placeholder='Subject' required/>
          <textarea type="message" rows='7' placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
        
      </div>
      
    </section>
  )
}

export default Contact
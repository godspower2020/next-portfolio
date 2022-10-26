import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import { AiOutlineMobile, AiOutlineMail } from 'react-icons/ai';
import { RiSendPlaneLine  } from 'react-icons/ri';
import toast, { Toaster } from "react-hot-toast";
import {motion} from 'framer-motion'

import { client } from '../lib/sanityClient';

const initialState = {name: '', email: '', message: ''}

const navLinks = [
  { name: "Home", 
   path: "/" 
  },
  { 
    name: "My Portfolio",
    path: "/portfolio",
  },
  {
    name: "My Resume",
    path: "/resume",
  },
];

const Contact = () => {
  const router = useRouter();
  
  const [formData, setFormData] = useState(initialState);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
        setFormData(initialState)
        toast.success('Form successfully submitted')
      })
      .catch((err) => console.log(err));
  };

  const today= new Date()
  const year= today. getFullYear()

  return (
    <div id='Contact'>
      <h2 className='head-text'>wanna say hello</h2>
      <div className='contact__form-container'>
        <motion.div 
          whileInView={{ x: [-200, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='admin-contact'
        >
          <div className='admin-contact-card'>
            <AiOutlineMobile />
            <a className='p-text' href='tel:+2347033903922'>+2347033903922</a>
          </div>
          <div className='admin-contact-card'>
            <AiOutlineMail />
            <a className='p-text' href='hello@augustine.dev'>hello@augustine.dev</a>
          </div>
          <ul className='app__flex__justify-align-flex-start column'>
            {navLinks.map((item, index) => (
              <Link className='menu_link' key={index} href={item.path}>{item.name}</Link>
            ))}
          </ul>
        </motion.div>
        <motion.div 
          whileInView={{y: [120, 60, 0], opacity: [0,  0, 1]}}
          transition={{duration: 0.9}}
          className='client__contact-details'
        >
          <div className='line'>
            <input className='p-text' placeholder='Your Name' autoComplete='off' name='name' value={name} onChange={handleChange} />
            <input className='p-text' placeholder='Your Email' autoComplete='off' name='email' value={email} onChange={handleChange} />
          </div>
          <textarea className='p-text' placeholder='Message' name='message' value={message} onChange={handleChange} /> 
          <div className='send-button'>
            <button type='button' onClick={handleSubmit} >
              {loading ? 'sending...' :
              <>
                <RiSendPlaneLine />
                Send
              </>               
              }
            </button>
          </div>
        </motion.div>
      </div>
      <motion.div 
        whileInView={{y: [120, 60, 0], opacity: [0,  0, 1]}}
        transition={{duration: 0.9}}
        className='footer app__flex'
      >
        <p>Copyright &copy; {year} </p>
      </motion.div>
    </div>
  )
}

export default Contact
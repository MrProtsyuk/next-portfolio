"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion"
import Link from 'next/link';
import { BsInstagram, BsLinkedin, BsFileEarmarkFont, BsGithub } from 'react-icons/bs';
import { toast } from 'react-hot-toast';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  npm
      emailjs.sendForm('service_zrzpjgs', 'template_fka4a3f', form.current, 'A-t-GPOsbzlJdwFAr')
          .then((result) => {
              toast('Email was sent, I will get back to you soon!', {
                  icon: '📨',
              })
            console.log(result.text);
          }, (error) => {
            toast('Huh, something went wrong. Shoot me an email here, protsyukmark@gmail.com', {
                icon: '❌',
            })
            console.log(error.text);
        });
    };
    return (
        <motion.div className='min-h-screen' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <motion.h2
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className='text-center lg:text-left text-3xl md:text-5xl lg:text-7xl m-2 lg:m-6 mt-4 md:mt-24'>
                    Lets get in touch 📨
            </motion.h2>
            <div className='flex justify-center place-content-center'>
                <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='flex flex-col place-content-center justify-center mt-10 md:mt-20 m-8 p-2 border border-gray-400 bg-gray-100 rounded-xl w-10/12 md:w-8/12 xl:w-5/12'>
                <form className='flex flex-col text-center text-lg md:text-xl m-4 lg:mr-6' ref={form} onSubmit={sendEmail}>
                    <label className='m-2 p-2 shadow-sm border border-transparent rounded-sm'>Your Name 🫵</label>
                    <input className='m-2 p-2' type="text" name="name" required />
                    <label className='m-2 p-2 shadow-sm border border-transparent rounded-sm'>Your Email 📧</label>
                    <input className='m-2 p-2' type="email" name="email" required />
                    <label className='m-2 p-2 shadow-sm border border-transparent rounded-sm'>A little Message ✍️</label>
                    <textarea className='m-2 p-2' name="message" />
                    <input className='m-2 p-2 text-white border border-black rounded-lg bg-blue-600 hover:bg-blue-500 hover:cursor-pointer' type="submit" value="Send" />
                </form>
                <div className='flex flex-row place-content-center ml-5 md:ml-0 text-left'>
                <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }} className='flex m-4 ml-0 lg:ml-6 p-0'>
                            <Link target='_blank' href="https://www.linkedin.com/in/markprotsyuk/" className='text-blue-700 hover:text-blue-500 hover:opacity-70 text-3xl lg:text-5xl'>
                                <BsLinkedin />
                            </Link>
                </motion.div>
                <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }} className='flex m-4 ml-0 lg:ml-6 p-0'>
                            <Link target='_blank' href="https://www.instagram.com/mark.protsyuk/" className='text-pink-700 hover:text-fuchsia-700 hover:opacity-70 text-3xl lg:text-5xl'>
                                <BsInstagram />
                            </Link>
                </motion.div>
                <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }} className='flex m-4 ml-0 lg:ml-6 p-0'>
                            <Link target='_blank' href="https://github.com/MrProtsyuk" className='text-gray-700 hover:text-gray-500 hover:opacity-70 text-3xl lg:text-5xl'>
                                <BsGithub />
                            </Link>
                </motion.div>
                <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.3, duration: 1 }} className='flex m-4 ml-0 lg:ml-6 p-0'>
                            <Link target='_blank' href="https://drive.google.com/file/d/1oXfDPiKDgbyA4kAFgYczAlLDJ2T1iY6P/view" className='hover:opacity-70 text-3xl lg:text-5xl'>
                                <BsFileEarmarkFont />
                            </Link>
                </motion.div>
                </div>
                </motion.div>
            </div>
        </motion.div>
    )
}
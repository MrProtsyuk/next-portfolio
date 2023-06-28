"use client"
import Image from "next/image"
import Link from "next/link"
import { BsArrowRightCircle } from "react-icons/bs"
import { motion } from "framer-motion"

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="overflow-hidden">
            <motion.h2
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className='text-center lg:text-left text-3xl md:text-5xl lg:text-7xl m-2 lg:ml-6 mt-4 md:mt-24'>
                    A little bit about me
            </motion.h2>
            <div className="flex flex-col lg:flex-row justify-center m-2 p-2 lg:m-6 lg:p-6">
                <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="flex place-content-center justify-center">
                    <Image
                        src="/about.JPEG"
                        width={400}
                        height={400}
                        className="border rounded-full w-7/12 md:w-5/12 lg:w-8/12"
                        alt="A photo of mark protsyuk" />
                </motion.div>
                <div className="w-12/12 md:w-11/12 flex flex-col items-center justify-center place-content-center">
                <motion.p
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 2 }}
                        className="flex mt-4 md:mt-16 ml-4 md:ml-24 lg:ml-0 m-4 text-center text-sm sm:text-md xl:text-2xl">Hey there!👋 My name is Mark Protsyuk and I have been a dev for about 2 years now. I started my journey back in 2020, when I took a web development class in community college. Since then, I have graduated from the UC Davis coding bootcamp 🎓 and have been teaching myself development skills, as well as being mentored by fellow peers. I started my journey as a web developer 🌐, specializing in NextJS and Apollo GraphQL but recently I began to learn C++ and Unreal Engine 5 because I have always dreamed of getting into game development 🎮. <br /> Check out some of the stuff I have worked on!</motion.p>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.3, duration: 3 }} className='flex place-content-center m-4 p-0'>
                            <Link href="/work" className='animate-bounce hover:opacity-70 text-3xl lg:text4xl'>
                                <BsArrowRightCircle />
                            </Link>
                        </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
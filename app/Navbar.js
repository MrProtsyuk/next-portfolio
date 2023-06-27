"use client"
import { motion } from "framer-motion"
import { AiOutlineHome } from "react-icons/ai"

export default function Navbar() {
    return (
        <div className="flex flex-row place-content-center justify-center md:place-content-between text-center p-2 sm:p-4 w-screen bg-stone-300 bg-opacity-20">
            <motion.h1 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .5 }} className="p-4 ml-2 text-2xl md:text-5xl text-center hover:opacity-75"><a href="/"><AiOutlineHome /></a></motion.h1>
            <ul className="flex flex-row mr-2 lg:mr-6">
                <li className="p-4 text-md md:text-3xl hover:opacity-75">
                    <motion.a initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .5 }} href="/about">About</motion.a>
                </li>
                <li className="p-4 text-md md:text-3xl hover:opacity-75">
                    <motion.a initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .5, duration: .5 }} href="/work">Work</motion.a>
                </li>
                <li className="p-4 text-md md:text-3xl hover:opacity-75">
                    <motion.a initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, duration: .5 }} href="/contact ">Contact</motion.a>
                </li>
            </ul>
        </div>
    )
}
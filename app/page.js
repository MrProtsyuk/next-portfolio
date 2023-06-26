"use client"
import Link from 'next/link'
import { BsArrowDownCircle } from "react-icons/bs"
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main>
      <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}} transition={{ duration: 1}} className='min-h-screen'>
        <div>
          <motion.h1 initial={{ x: -800 }} animate={{ x: 0 }} transition={{ duration: 3}} className='text-left text-7xl sm:text-9xl ml-2 lg:ml-6 mt-32 lg:mt-48'>Mark Protsyuk</motion.h1>
        </div>
        <motion.h2 initial={{x: 800}} animate={{x: 0}} transition={{duration: 3}} className='text-right text-3xl sm:text-4xl md:text-6xl mr-2 lg:mr-6 p-2 mt-24'>Software Engineer 🧑‍💻 in Sacramento, CA 🏙️</motion.h2>
        <div className='flex place-content-center mt-32 md:mt-48 p-0'>
          <Link href="/about" className='animate-bounce hover:opacity-70'>
            <BsArrowDownCircle size={40} />
          </Link>
        </div>
        </motion.div>
    </main>
  )
}

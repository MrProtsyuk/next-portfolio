"use client"
import { motion } from "framer-motion"

export default function About() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>This is the about page</motion.div>
    )
}
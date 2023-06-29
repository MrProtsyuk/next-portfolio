"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const webProjects = [
    {
        name: "WOL Teacher Source",
        desc: "A Storehouse of Childrens and Youth Ministry Curriculum Built on a 6-Year Teaching Strategy 📖",
        tech: "Nextjs, TypeScript, GraphQL, Material UI",
        page: "https://www.teachersource.life/",
        image: "/about.jpeg",
    },
    {
        name: "Typescript Chat App",
        desc: "A real-time chat application that you can use!💬",
        tech: "TypeScript, Supabase, Remix",
        page: "",
        image: "/about.jpeg",
    },
    {
        name: "Electron Chat Terminal",
        desc: "Making chat GPT for your desktop! 💻",
        tech: "Electron ⚛️, ChatGPT-API",
        page: "",
        image: "/about.jpeg",
    },
]

const gameProjects = [
    {
        name: "UE5 Space Shooter",
        desc: "Space Shooter made during a Udemy Course show casing skills in C++ programming, level design, and UX 👽",
        tech: "Unreal Engine 5, C++, and Blueprints",
        page: "https://mrprotsyuk.itch.io/space-shooter",
        image: "/about.jpeg",
    },
    {
        name: "C++ 2D Platformer",
        desc: "A platformer I made in COMP 4300 🕹️",
        tech: "Made with C++ and SMFL",
        page: "",
        image: "/about.jpeg",
    },
    {
        name: "Robot Rampage",
        desc: "A little first person shooter I made based off a chat GPT prompt 🤖",
        tech: "Made with Unreal Engine 5 Blueprints",
        page: "",
        image: "/about.jpeg",
    },
]

export default function Contact() {
    return (
        <motion.div className="min-h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <motion.h2
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className='text-center lg:text-left text-3xl md:text-5xl lg:text-7xl m-2 lg:m-6 mt-4 md:mt-24'>
                    Some of my projects ⚒️
            </motion.h2>
            <div className="flex flex-col lg:flex-row place-content-center justify-evenly">
                <div className="my-4 md:my-6">
                    <div className="place-content-center text-center justify-center">
                        <motion.h2 initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: .4 }} className="font-medium underline text-3xl">Web Development</motion.h2>
                    </div>
                    <div className="place-content-center justify-center">
                        <ul className="place-content-center justify-center">
                            {webProjects.flat().map((item) => (
                                <li key={item.name} className="text-center text-white bg-stone-400 lg:text-black lg:bg-transparent lg:text-left w-72 m-4 p-6 md:w-[32rem] border border-transparent rounded-xl hover:text-white hover:bg-stone-400 hover:duration-500 hover:ease-in-out">
                                    <motion.h3 initial={{ y: 200, opacity: 0}} animate={{ y: 0, opacity: 1}} transition={{ duration: 1, delay: .6}} className="text-xl md:text-2xl p-2">{item.name}</motion.h3>
                                    <motion.p initial={{ y: 200, opacity: 0}} animate={{ y: 0, opacity: 1}} transition={{ duration: 1, delay: .7}} className="text-lg md:text-xl p-2">{item.desc}</motion.p>
                                    <motion.p initial={{ y: 200, opacity: 0}} animate={{ y: 0, opacity: 1}} transition={{ duration: 1, delay: .8}} className="text-md md:text-lg p-2">Tech: {item.tech}</motion.p>
                                    <motion.div className="flex place-content-center justify-center" initial={{ y: 200, opacity: 0}} animate={{ y: 0, opacity: 1}} transition={{ duration: 1, delay: .9}}>
                                        <Image alt="image" width={200} height={200} src={item.image} />
                                    </motion.div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="my-4 md:my-6">
                    <div className="place-content-center text-center justify-center">
                        <motion.h2 initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: .6 }} className="font-medium underline text-3xl">Game Development</motion.h2>
                    </div>
                    <ul>
                        {gameProjects.flat().map((item) => (
                            <li key={item.name} className="text-center text-white bg-stone-400 lg:text-black lg:bg-transparent lg:text-left w-72 m-4 p-2 md:p-6 md:w-[32rem] border border-transparent rounded-xl hover:text-white hover:bg-stone-400 hover:duration-500 hover:ease-in-out">
                                <motion.h3 initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1}} transition={{ duration: 1, delay: .8}} className="text-xl md:text-2xl p-2">{item.name}</motion.h3>
                                <motion.p initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1}} transition={{ duration: 1, delay: .9}} className="text-lg md:text-xl p-2">{item.desc}</motion.p>
                                <motion.p initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1}} transition={{ duration: 1, delay: 1}} className="text-md md:text-lg p-2">Tech: {item.tech}</motion.p>
                                <motion.div className="flex place-content-center justify-center" initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1}} transition={{ duration: 1, delay: 1.1}}>
                                    <Image alt="image" width={200} height={200} src={item.image} />
                                </motion.div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}
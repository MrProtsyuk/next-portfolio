import { AiOutlineHome } from "react-icons/ai"

export default function Navbar() {
    return (
        <div className="flex flex-row place-content-center justify-center md:place-content-between text-center p-2 sm:p-4 w-screen bg-stone-300 bg-opacity-20">
            <h1 className="p-4 ml-2 text-2xl md:text-5xl text-center hover:opacity-75"><a href="/"><AiOutlineHome /></a></h1>
            <ul className="flex flex-row mr-2 lg:mr-6">
                <li className="p-4 text-md md:text-3xl hover:opacity-75">
                    <a href="/about">About</a>
                </li>
                <li className="p-4 text-md md:text-3xl hover:opacity-75">
                    <a href="/work">Work</a>
                </li>
                <li className="p-4 text-md md:text-3xl hover:opacity-75">
                    <a href="/contact ">Contact</a>
                </li>
            </ul>
        </div>
    )
}
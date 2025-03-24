import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){
    const[togglemenu,setTooglemenu] = useState(false)

    return <header className="flex justify-between px-5 py-2 bg-primary">
        <a className="font-bold text-black" href="#">Rohith A</a>
        <nav className="hidden md:block">
            <ul className=" flex text-white">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skill">Skills</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        {togglemenu && <nav className="block md:hidden ">
            <ul onClick={() => setTooglemenu(!togglemenu)} className=" flex flex-col text-white mobile-nav">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skill">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>}
        <button onClick={() => setTooglemenu(!togglemenu)} className='block md:hidden'><Bars3Icon className="text-white h-5"/></button>
        
    </header> 

}
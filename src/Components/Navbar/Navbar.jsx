import React, { useEffect, useState } from 'react'
import { Link} from 'react-scroll';
import { NavLink } from 'react-router-dom'
import Projects from '../Projects/Projects'
import Experience from '../Experience/Experience'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'


export default function Navbar() {
    const linkClass = 'cursor-pointer hover:text-purple-400 transition-colors duration-300';
    const activeLinkClass = 'text-purple-400 font-semibold';

    const [openMenu, setOpenMenu] = useState(false);
    const [pageScrolled, setPageScrolled] = useState(false);
    function OpenMenu(){
        if(openMenu){
            setOpenMenu(false);
        }
        else{
            setOpenMenu(true);
        }
    }
    useEffect(()=>{
        const scrolled = ()=>{
                if(window.scrollY > 5){
                    setPageScrolled(true);
                }
                else{
                    setPageScrolled(false);
                }
            };
            window.addEventListener('scroll', scrolled);
            return()=> window.removeEventListener('scroll', scrolled);
        
    },[]);
    
    return<>
        <nav className={`py-5 fixed w-full z-50 transition-colors duration-300 ${pageScrolled ? 'bg-gradient-to-br from-gray-800 to-gray-700 bg-opacity-20 backdrop-blur-md' : 'bg-transparent' }`}>
            <div className="flex flex-wrap justify-between container lg:px-10 px-7">
                <h2 className='text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-500 font-bold text-3xl'><a href="#home">Nesma Farid</a></h2>
                <div className="list">
                    <ul className='lg:flex flex-wrap hidden gap-10 text-white font-bold'>
                            {
                                ['home', 'about', 'projects', 'experience', 'contact'].map(section => (
                                    <li key={section}>
                                        <Link
                                            to={section}
                                            spy={true}
                                            smooth={true}
                                            offset={-80}
                                            duration={500}
                                            className={linkClass}
                                            activeClass={activeLinkClass}
                                        >
                                            {section.charAt(0).toUpperCase() + section.slice(1)}
                                        </Link>
                                    </li>
                            ))}
                        </ul>
                </div>
                <div onClick={()=>OpenMenu()} className="lg:hidden flex transition-all duration-500 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    
                </div>
                
            </div>
            {
                openMenu ?  
                <ul className='bg-gradient-to-br from-gray-800 to-gray-700 bg-opacity-20 backdrop-blur-md px-7 text-white space-y-2 pt-5 text-center lg:hidden flex flex-col transition-500 duration-300 ease-in-out'>
                    {
                                ['home', 'about', 'projects', 'experience', 'contact'].map(section => (
                                    <li key={section}>
                                        <Link
                                            to={section}
                                            spy={true}
                                            smooth={true}
                                            offset={-80}
                                            duration={500}
                                            className={linkClass}
                                            activeClass={activeLinkClass}
                                        >
                                            {section.charAt(0).toUpperCase() + section.slice(1)}
                                        </Link>
                                    </li>
                            ))}
                </ul>: ''
            }          
        </nav>
    </>
}

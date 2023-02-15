import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div>
            <footer className='fixed w-full bottom-0 p-4 bg-white sm:p-6'>
                <div className='sm:flex sm:items-center sm:justify-between'>
                    <span className='text-sm text-black sm:text-center'>© 2023 <a href="https://github.com/sethdaulton" className="hover:underline">Seth Daulton</a></span>
                <ul className='flex flex-wrap items-center mt-3 text-sm text-black dark:text-gray-800 sm:mt-0'>
                    <li className='hover:text-[#fbbf24] hover:underline'>
                        <Link to='home' smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className='hover:text-[#fbbf24] hover:underline'>
                        <Link to='about' smooth={true} duration={500}>About</Link>
                    </li>
                    <li className='hover:text-[#fbbf24] hover:underline'>
                        <Link to='projects' smooth={true} duration={500}>Projects</Link>
                    </li>
                    <li className='hover:text-[#fbbf24] hover:underline'>
                        <Link to='contact' smooth={true} duration={500}>Contact</Link>
                    </li>
                    <li className='hover:text-[#fbbf24] hover:underline'>
                        <a href="https://www.linkedin.com/in/sethdaulton/" target='#'>LinkedIn</a>
                    </li>
                    <li className='hover:text-[#fbbf24] hover:underline'>
                        <a href="https://github.com/sethdaulton" target='#'>GitHub</a>
                    </li>
                </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer
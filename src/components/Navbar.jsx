import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed --full h-[120px] flex justify-between items-center px-4 bg-gray-500 text-white'>
            <div className='text-3xl'>Seth Daulton</div>

            {/* navbar menu */}
            <ul className='hidden sm:flex'>
                <li className='hover:text-[#fbbf24] hover:underline'>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='hover:text-[#fbbf24] hover:underline'>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='hover:text-[#fbbf24] hover:underline'>
                    <Link to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='hover:text-[#fbbf24] hover:underline'>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* compacted links */}
            <div onClick={handleClick} className='sm:hidden z-40'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile navigation */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gray-800 flex flex-col justify center items-center'}>
                <li className='py-6 text-4xl hover:text-yellow'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-yellow'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-yellow'>
                    <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-yellow'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default Navbar
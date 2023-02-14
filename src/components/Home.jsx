import React from 'react'
import { Link } from 'react-scroll';

const Home = () => {
return (
    <div name='home' className='w-full h-screen bg-white'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <div>
                <img className ='hidden sm:flex scale-50 mt-12 h-[500px] rounded-full' src='./src/assets/SethDaulton.jpg' alt='Seth Daulton'/>
            </div>
            <p className='text-black text-lg'>Hi, I'm</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-black'>Seth Daulton</h1>
            <h2 className='text-4xl sm:text-7xl front-bold text-black'>I'm a full stack developer</h2>
            <p className='test-black py-4 max-w-[700]'>with a background in graphic design and fine arts. I'm looking for a new challenge in the tech field</p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:border-blue'>
                <Link to='projects' smooth={true} duration={500}>
                    View Projects
                </Link>
            </button>
        </div>
        
        </div>
    </div>
)
}

export default Home
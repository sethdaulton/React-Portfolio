import React from 'react'

const About = () => {
    return (
    <div name='about' className='w-full h-500 bg-white text-black'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='text-4xl font-bold inline border-b-4 border-black'>About</div>
            </div>
        </div>
        <div className='max-w-[500px] w-full grid sm:grid-cols-1 gap-8 px-8 mx-[500px]'>
        {/* <div>
                <img className='hidden sm:flex scale-50 mt-12 h-[50px] rounded-full' src='./src/assets/SethDaulton.jpg' alt='Seth Daulton'/>
            </div> */}
            <div className='pt-10 sm:text-left text-3xl font-bold'>
                <p>Budding Web Developer and experienced Graphic Designer looking for a new challenge in tech</p>
            </div>
            <div className='text-lg'>
                <p>I have an Master of Fine Arts degree in Printmaking which contributes to my ability to solve problems creatively and several years of experience in graphic design leading to a strong team member in front-end web development. I also posses a strong set of communication skills and interpersonal skills making me a strong member of a small or large team.</p>
            </div>
        </div>
    </div>
    )
}

export default About
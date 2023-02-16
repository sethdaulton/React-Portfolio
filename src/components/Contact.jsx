import React from "react"

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-white flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/a5081dc0-f090-4063-b428-54034a8adaee" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                <p className='text-4xl front-bold inline border-b-4 border-black text-black'>Contact</p>
                <p className='text-black text-xl py-4'>Get in touch via email: <a className='text-yellow' href='mailto:seth.daulton@gmail.com'>seth.daulton@gmail.com</a></p>
                <p className='text-black text-xl py-4'>OR</p>
                <p className='text-black text-xl py-4'>Submit the form below</p>
                </div>
                <input className='bg-gray-200 p-2 text-black border-2 border-gray-400' type="text" placeholder='Name' name='name'/>
                <input className='my-4 p-2 bg-gray-200 border-2 border-gray-400' type="email" placeholder='Email' name='email'/>
                <textarea className='my-2 p-2 bg-gray-200 border-2 border-gray-400' type="email" placeholder='Write a message here' name='email'/>
                <button area className='text-black border-2 p-2 bg-[#fbbf24] hover:border-black hover:text-black hover:bg-gray-200 hover:underline px=4 my-8 mx-auto items-center'>Send</button>
                
                </form> 
        </div>
    )
}

export default Contact
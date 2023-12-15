import React from 'react'
import Sidebar from './Sidebar'

const ToggleButtons = () => {
    return (
        <section className='flex flex-row'>
            <Sidebar />
            <div className='bg-black text-white h-screen w-full'>
                <div className=" mt-10 grid grid-cols-4 h-20 w-[36rem] bg-gray-800 rounded-lg mx-auto ">
                    <button className='capitalize text-lg '>Chat with ChatBot</button>
                    <button className='capitalize text-lg '>Summarize the document</button>
                    <button className='capitalize text-lg '>Grammer Correction</button>
                    <button className='capitalize text-lg '>Grammer Correction</button>
                </div>
            </div>
        </section>
    )
}

export default ToggleButtons
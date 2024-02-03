import React from 'react'

export default function Card({ id, name, image, status, species }) {
    return (
        <div className='from-gray-800 to-blue-500 bg-gradient-to-tr rounded-md'>
            <section className='flex justify-between mb-12 bg-gray-800 rounded-t-md p-3'>
                <h1 className='text-white text-2xl'>{name}</h1>
                <p className='text-green-500'>{id}</p>
            </section>
            <section className='p-4 gap-y-8 flex flex-col'>
                <img src={image} alt={name} className='w-[100%] h-50vh rounded-md' />
                <div className='flex items-center'>
                    <span className={`w-[.5rem] block h-[.5rem] mr-[.375rem] ${status == 'Alive' ? "bg-[#55cc44]" : "bg-[#d63d2e]"}  rounded-full`}></span>
                    <p className='text-green-500'><b>status: {status}</b></p>
                </div>

                <p className='text-green-500'><b>species: {species}</b></p>
            </section>
        </div>
    )
}

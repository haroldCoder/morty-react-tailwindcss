import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Card({ id, name, image, status, species, episodes }) {
    const [episodess, setEpisodes] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const getEpisodes = () => {
            let array = []
            episodes.map(async (e) => {
                const res = (await axios.get(e)).data;
                array.push(res)
            })
            setEpisodes(array)
        }

        getEpisodes()
    }, [])

    console.log(episodess);

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
            <section className='p-3 flex justify-center'>
                <button onClick={()=>setOpen(true)} className=' bg-gradient-to-r text-white to-green-600 from-slate-500 rounded-md px-8 p-3'>Episodios</button>
            </section>
            {
                open ? 
                <div onDoubleClick={()=>setOpen(false)} className='absolute grid grid-cols-3 gap-5 bg-[#24242444] opacity-90 p-5 w-[60%] top-[20%] left-[30%]' style={{backdropFilter: "blur(6px)"}}>
                    {
                        episodess.map((e)=>(
                            <div className='bg-green-500 rounded-md p-4 px-20'>
                               <h2 className='text-white'>{e.name}</h2> 
                            </div>
                            
                        ))
                    }
                </div> : null
            }
        </div>
    )
}

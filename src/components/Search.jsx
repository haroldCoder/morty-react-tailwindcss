import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Search({ rickmorty, setRickmorty, load }) {
    const [name, setName] = useState("");


    const Search = () => {
        const newinfo = rickmorty.filter((e) => {
            if (e.name == name) {
                return e;
            }
        })

        setRickmorty(newinfo);
    }

    useEffect(() => {
        const newinfo = rickmorty.filter((e) => {
            if (e.name.includes(name)) {
                return e;
            }
        })

        setRickmorty(newinfo);

        const getData = async() => {
            if (name == "" && load) {
                const res = (await axios.get(`https://rickandmortyapi.com/api/character`)).data;
                setRickmorty(res.results);
            }
        }

        getData();
    }, [name]);

    return (
        <div className='flex gap-x-5 mb-6 w-[100%] justify-end'>
            <input onChange={(e) => { setName(e.target.value) }} type="text" name="search_charact" id="search_charact" placeholder='Search an Character By Name' className='border-b-[1px] w-[25%] animate-pulse animate-once animate-ease-linear animate-alternate animate-fill-both rounded-md border-green-500 p-2 text-white bg-slate-500' />
            <button onClick={Search} className='bg-gradient-to-t from-blue-800 to-gray-400 w-[10%] text-white rounded-md p-3'>Search</button>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios"

export default function Maximaze() {
    const { idcharacter } = useParams();
    const [datamorty, setDatamorty] = useState({

    });

    useEffect(() => {
        const getMorty = async () => {
            const res = await axios.get(`https://rickandmortyapi.com/api/character/${idcharacter}`)
            setDatamorty(res.data)
        }

        getMorty()
    }, [idcharacter])

    console.log(datamorty);
    return (
        <div className='p-16'>
            <img src={datamorty.image} alt="image" />
            {
                Object.entries(datamorty).map(([key, value]) => (
                    key != "episode" && key != "location" && key != "origin" && key != "image" ?
                        <div>
                            <p className='text-green-600'>{key}: {value}</p>
                        </div>
                            :
                            key == "episode" && key != "image" ?
                                datamorty.episode.map(url => (
                                    <p className='text-white'>{url}</p>
                                ))
                            : key == "origin" && key != "image" ?
                            Object.entries(datamorty.origin).map(([key2,value2])=>(
                                <div>
                                    <p className='text-blue-600'>{key2}: {value2}</p>
                                </div>
                            ))
                            : key == "location" && key != "image" ?
                            Object.entries(datamorty.location).map(([key3, value3])=>(
                                <div>
                                <p className='text-red-600'>{key3}: {value3}</p>
                            </div>
                            ))
                            :null
                ))
            }
        </div>
    )
}

import { useEffect, useRef, useState } from 'react'
import './App.css'
import axios from 'axios';
import Card from './components/Card';
import Search from './components/Search';

function App() {
  const [rickmorty, setRickmorty] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCharacters();

    
  }, [page]);

  const getCharacters = async () => {
    let res = (await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)).data

    setRickmorty(res.results);
  }
  console.log(page);
  return (
    <>
      <div className='p-14'>
        <section>
          <Search rickmorty={rickmorty} setRickmorty={setRickmorty} />
        </section>
        <section className='flex justify-between flex-wrap gap-y-4'>
          {
            rickmorty.map(elemento => (
              <Card name={elemento.name} id={elemento.id} episodes={elemento.episode} image={elemento.image} status={elemento.status} species={elemento.species} />
            ))
          }
        </section>
        <div className='flex justify-center  w-[100%] px-[10%]'>
          <button onClick={() => { setPage(page + 1) }} className='bg-gradient-to-r  w-[70%] my-12 text-white to-green-600 from-slate-500 rounded-md px-8 p-3'>Next</button>
          <button onClick={() => { setPage(page - 1)  }} disabled = { page === 1} className='bg-gradient-to-r mx-[20%] w-[70%] my-12 text-white to-blue-600 from-slate-500 rounded-md px-8 p-3'>Prev</button>
        </div>
      </div>
    </>
  )
}

export default App

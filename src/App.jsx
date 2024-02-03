import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Card from './components/Card';
import Search from './components/Search';

function App() {
  const [rickmorty, setRickmorty] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    const res = (await axios.get(`https://rickandmortyapi.com/api/character`)).data;
    console.log(res);
    setRickmorty(res.results);
  }

  return (
    <>
      <div className='p-14'>
        <section>
          <Search rickmorty={rickmorty} setRickmorty={setRickmorty} />
        </section>
        <section className='flex justify-between flex-wrap gap-y-4'>
          {
            rickmorty.map(elemento => (
              <Card name={elemento.name} id={elemento.id} image={elemento.image} status={elemento.status} species={elemento.species} />
            ))
          }
        </section>
      </div>
    </>
  )
}

export default App

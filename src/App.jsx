import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [rickmorty, setRickmorty] = useState([]);

  useEffect(()=>{
    getCharacters();
  }, []);

  const getCharacters = async() =>{
    const res = (await axios.get(`https://rickandmortyapi.com/api/character`)).data;
    console.log(res);
    setRickmorty(res.result);
  }

  return (
    <>
      <div className='flex justify-between'>

      </div>
    </>
  )
}

export default App

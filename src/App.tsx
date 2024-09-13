import { useState } from 'react'
import './App.css'
import { FaInstagram, FaYoutube } from 'react-icons/fa';

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState(false);
  const [count, setCount] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  }
  
  const getHowManyDays = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const totalDays = ((1 + inputValue) / 2) * inputValue;

    setCount(totalDays);
    setResult(true);
  }

  return (
    <>
      <div className='container'>
        {/* { result && ( <h1>Gero Arias lleva {count} dominadas</h1> ) } */}
        <div className='form-data'>
          <form onSubmit={getHowManyDays} className='form'>
            <label htmlFor="number">Escribe el día del reto</label>
            <input 
                id='number'
                type="number" 
                min={1} max={366} 
                required 
                value={inputValue || ''} 
                onChange={handleInputChange}
                className='inputNumber'
                />
              <button type='submit'>Ver dominadas hechas 🔥</button>
          </form>
        </div>

        <div className='total'> 
          <p>Total:</p>
          { result ? ( <h1>{String(count).replace(/(.)(?=(\d{3})+$)/g,'$1,') }</h1> ) : ( <h1>???</h1> ) }
          {/* <p>dominadas</p> */}
        </div>

        <div className='footer'>
          <div>
            <p>Sus redes sociales</p>
          </div>
          <div className='social-media'>
            <a href="https://www.instagram.com/geroooo_arias2.0/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={50} color='white'/>
            </a>
            <a href="https://www.youtube.com/@geroooo_arias" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={50} color='white'/>
            </a>
          </div>
        </div>

        <a href='https://www.instagram.com/gmsus4.dev/' target="_blank" rel="noopener noreferrer" className='gmsus4'>Created by Gmsus4</a>
      </div>
    </>
  )
}

export default App

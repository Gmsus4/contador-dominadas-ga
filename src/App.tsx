import { useState } from 'react'
import moment from 'moment';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import './App.css'

function App() {
  const getDay = moment().dayOfYear(); //Obtiene los días que va del año
  const getDominadas = ((1 + getDay) / 2) * getDay; //Transforma esos días en las dominadas hechas por Gero Arias

  const [inputValue, setInputValue] = useState(0);
  // const [result, setResult] = useState(false);
  const [count, setCount] = useState(getDominadas);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  }
  
  const getHowManyDays = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const totalDays = ((1 + inputValue) / 2) * inputValue;

    setCount(totalDays);
    // setResult(true);
  }

  return (
    <>
      <div className='container'>
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
          <p>Total de dominadas del día {getDay}:</p>
          {/* { result ? ( <h1>{String(count).replace(/(.)(?=(\d{3})+$)/g,'$1,') }</h1> ) : ( <h1>???</h1> ) } */}
          <h1>{String(count).replace(/(.)(?=(\d{3})+$)/g,'$1,') }</h1>
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
          <a href='https://www.instagram.com/gmsus4.dev/' target="_blank" rel="noopener noreferrer" className='gmsus4'>Created by Gmsus4</a>
        </div>

      </div>
    </>
  )
}

export default App

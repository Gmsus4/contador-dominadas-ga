import { useState } from "react"; // Hook para manejar el estado en el componente
import moment from "moment"; // Biblioteca para manipulación de fechas
import { FaInstagram, FaYoutube } from "react-icons/fa"; // Iconos de redes sociales
import "./App.css"; // Estilos personalizados para la aplicación
import { CiCalendarDate } from "react-icons/ci"; // Icono de calendario

function App() {
  // Obtener el día actual del año (de 1 a 365/366)
  const getDay = moment().dayOfYear();

  // Calcular el número de dominadas basado en la fórmula ((1 + día) / 2) * día
  const getDominadas = ((1 + getDay) / 2) * getDay;

  // Estados para manejar el valor ingresado, el día y el total de dominadas
  const [inputValue, setInputValue] = useState(0); // Almacena el día ingresado
  const [day, setDay] = useState(getDay); // Almacena el día actual
  const [count, setCount] = useState(getDominadas); // Almacena el número total de dominadas

  // Función para actualizar el valor del input cuando el usuario escribe un número
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value)); // Convierte el valor a número y actualiza el estado
  };

  // Función que se ejecuta al enviar el formulario
  const getHowManyDays = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario
    const totalPullUps = ((1 + inputValue) / 2) * inputValue; // Calcula el total de dominadas basado en el día ingresado

    setCount(totalPullUps); // Actualiza el número total de dominadas
    setDay(inputValue); // Actualiza el día mostrado en la interfaz
  };

  return (
    <>
      <div className="container">
        <div className="form-data">
          {/* Formulario para ingresar el día del reto */}
          <form onSubmit={getHowManyDays} className="form">
            <label htmlFor="number">Escribe el día del reto</label>
            <input
              id="number"
              type="number"
              min={1}
              max={366}
              required
              value={inputValue || ""} // El valor del input es el valor ingresado o vacío por defecto
              onChange={handleInputChange} // Llama a la función para manejar el cambio en el input
              className="inputNumber"
            />
            <button type="submit">Ver dominadas hechas 🔥</button> {/* Botón para enviar el formulario */}
          </form>
        </div>

        <div className="total">
          <p>Total:</p>
          {/* Muestra el total de dominadas, formateado con comas para mejor legibilidad */}
          <h1>{String(count).replace(/(.)(?=(\d{3})+$)/g, "$1,")}</h1>
          <p className="dayDate">
            {/* Icono de calendario y día del reto */}
            <CiCalendarDate />
            {day}
          </p>
        </div>

        <div className="footer">
          <div>
            <p>Sus redes sociales</p> {/* Texto para indicar las redes sociales */}
          </div>
          <div className="social-media">
            {/* Enlaces a las redes sociales con iconos de Instagram y YouTube */}
            <a
              href="https://www.instagram.com/geroooo_arias2.0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={50} color="white" />
            </a>
            <a
              href="https://www.youtube.com/@geroooo_arias"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={50} color="white" />
            </a>
          </div>
          {/* Enlace con el crédito del creador */}
          <a
            href="https://www.instagram.com/gmsus4.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="gmsus4"
          >
            Created by Gmsus4
          </a>
        </div>
      </div>
    </>
  );
}

export default App; // Exporta el componente para que pueda ser usado en otros archivos

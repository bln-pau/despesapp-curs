import React, { useState } from 'react'; // Para poder usar fragment necesitamos React
import './App.css';
import Titulo from './componentes/titulo/Titulo';

/* FRAGMENT
    Para eliminar encapsulamientos de elementos
*/

function App() {

  const [mostrarCuentas, setMostrarCuentas] = useState(true); // Es una variable booleana que por defecto es true

  const [cuentas, setCuentas] = useState([
    {concepto: "comida", cantidad: 30.55, padadoPor: "Pere", id: 1},
    {concepto: "cena", cantidad: 45.65, padadoPor: "Toni", id: 2},
    {concepto: "excursión", cantidad: 12.50, padadoPor: "Anna", id: 3}
  ]);

  const subtitulo = "React & Firebase!!"

  const handleClick = (id) => {
    setCuentas ((cuentasPrevias) => cuentas.filter((cuenta) => id !==  cuenta.id));
  }

  return (
    <div>
      <Titulo titulo = "Bienvenidos al curso!!" subtitulo = { subtitulo }/>
      { !mostrarCuentas && 
          (<div>
            <button onClick={ () => setMostrarCuentas(true)}>Ocultar cuentas</button>
          </div>)
      }

      { 
        mostrarCuentas && 
          (<div>
            <button onClick={ () => setMostrarCuentas(false)}>Mostrar cuentas</button>
          </div>)
      }
      
      { mostrarCuentas && 
        cuentas.map((cuenta, indice) => (
          <React.fragment key={cuenta.id}> 
            <h2>{ indice + 1 } - { cuenta.concepto }</h2>
            <button onClick={ () => handleClick(cuenta.id)}>Eliminar despesa</button>
          </React.fragment>
        ))
      }
    </div>
  )
}

export default App

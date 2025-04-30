import React, { useState } from 'react'; // Para poder usar fragment necesitamos React
import './App.css';
import Titulo from './componentes/titulo/Titulo';
import Modal from './componentes/modal/Modal';
import GastosLista from './componentes/gastosLista/gastosLista';

/* MODAL
    Vamos a pasar funciones en el props
*/

function App() {

  const [mostrarCuentas, setMostrarCuentas] = useState(true); // Es una variable booleana que por defecto es true
  const [mostrarModal, setMostrarModal] = useState(true);

  const [cuentas, setCuentas] = useState([
    {concepto: "comida", cantidad: 30.55, padadoPor: "Pere", id: 1},
    {concepto: "cena", cantidad: 45.65, padadoPor: "Toni", id: 2},
    {concepto: "excursión", cantidad: 12.50, padadoPor: "Anna", id: 3}
  ]);

  const subtitulo = "React & Firebase!!"

  const handleClick = (id) => {
    setCuentas ((cuentasPrevias) => cuentas.filter((cuenta) => id !==  cuenta.id));
  }

  const handleCerrar = () => {
    setMostrarModal(false); 
  }

  return (
    <div>
      <Titulo titulo = "Bienvenidos al curso!!" subtitulo = { subtitulo }/>
      { !mostrarCuentas && 
          (<div>
            <button onClick={ () => setMostrarCuentas(true)}>Mostrar cuentas</button>
          </div>)
      }

      { 
        mostrarCuentas && 
          (<div>
            <button onClick={ () => setMostrarCuentas(false)}>Ocultar cuentas</button>
          </div>)
      }
      
      { mostrarCuentas && <GastosLista cuentas = {cuentas}></GastosLista>
        
      }

      {mostrarModal && <Modal handleCerrar = {handleCerrar}>
          <h2>Componente Modal</h2>
          <p>Ahora cambiamos el contenido</p>
          <p>Otro párrafo</p>
        </Modal>
        }

      <div>
          <button onClick={ () => setMostrarModal(true)}>Mostrar Modal</button>
      </div> 
    </div>
  )
}

export default App

import './App.css'

function App() {

  const titulo = "Bienvenidos al curso";
  const subtitulo = "React & Firebase";
  const web = "http://www.menorca.info";

  return (
    <div>
      <h2>{ titulo }</h2>
      <p>{ subtitulo }</p>
      <p>La fecha de hoy es : { new Date().toDateString() }</p>
      <p>Número aleatorio; { Math.random() * 100 }</p>
      <a href={ web }>Visita el periódico</a>
    </div>
  )
}

export default App

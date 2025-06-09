import { useEffect, useState, useRef } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";


function useSearch(){
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true) //Para ver si es la primera vez que se renderiza. Si el search esta vacio y que no renderice mensaje de error

useEffect(()=>{
  
  if (isFirstInput.current){
    isFirstInput.current = search === ''
    return
  }
  
  if(search === ''){
    setError('No se puede buscar una pelicula vacía')
    return
  }

  if(search.match(/^\d+$/)) {
    setError('No se puede buscar una pelicula con un número')
    return
  }

  if(search.length < 3) {
    setError('La búsqueda debe tener al menor 3 caracteres')
    return
  }

  setError(null)
}, [search])
return {search, updateSearch, error}
}

//--------------------------------------------------------
function App() {
  //Uso del custom hook
  const { movies } = useMovies();
  const {search, updateSearch, error} = useSearch()

  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log({search})
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <div className="page">
      
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input 
          style={{
            border: '1px solid transparent', 
            borderColor: error ? 'red' : 'transparent'
          }} onChange={handleChange} value={search} placeholder="Avengers, Matrix, Star Wars" />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}> {error} </p>}

      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}
export default App;

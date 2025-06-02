import "./App.css";
import responseMovies from "./mocks/with-results.json";
// import withoutResults from "./mocks/no-results.json";

function App() {
  const movies = responseMovies.Search;
  console.log(movies)
  const hasMovies = movies?.length > 0;

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form">
          <input placeholder="Avengers, Matrix, Star Wars" />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        {
          hasMovies
            ? (
              <ul>
                {
                  movies.map(movie=>(
                    <li key={movie.imdbID}>
                      <h3>{movie.Title}</h3>
                      <h3>{movie.Year}</h3>
                      <img src={movie.Poster} alt={movie.Title} />
                    </li>
                  ))
                }
              </ul>
            )
            : (
              <p>No se encontraron peliculas</p>
            )
        }

      </main>
    </div>
  );
}
export default App;

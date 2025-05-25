import { useEffect, useState } from "react";
import "./App.css";
import { getRandomFact } from "./services/facts";

// Prefijo de la API de gatos
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [factError, setFactError] = useState();

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact));
    }, []);

  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split(" ").slice(0, 3).join(" ");

    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImageUrl(url);
      });
  }, [fact]);

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact);
    }


  return (
    <main>
      <h1>App de gatitos</h1>
      <section>

        <button onClick={handleClick}>Nuevo hecho</button>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Imagen extraida usando primeras 3 palabras desde ${fact}`}
          />
        )}
      </section>
    </main>
  );
}

export default App;

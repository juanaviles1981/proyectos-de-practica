import { useEffect, useState } from "react";
import "./App.css";

// Endpoint de la API de gatos
const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
// Prefijo de la API de gatos
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [factError, setFactError] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
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

  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
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

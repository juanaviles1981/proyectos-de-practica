import { useEffect, useState } from "react";

// Endpoint de la API de gatos
const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

// //Endpoint de la imagen de la API de gatos
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true"}`;

export function App() {
  const [fact, setFact] = useState("cat fact !");

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => setFact(data.fact));
  }, [])

  return (
    <div>
      <h1>App de gatitos</h1>
      <p><strong>{fact}</strong></p>
    </div>
  )
}

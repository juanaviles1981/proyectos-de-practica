import React, { useEffect, useState } from "react";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`;

export default function Fetch() {
  const [fact, setFact] = useState("Cualquier cat fact");
  const [imageUrl, setImageUrl] = useState("");

  // Recupera fact
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);

  // Recupera imagen cuando cambia el fact
  useEffect(() => {
    if (!fact) return; // Para que no colapse la primer vez que renderiza
    // const firstWord = fact.split(' ').slice(0,3).join('') // split divide en array. slice corta y join une
    const threeFirstWords = fact.split(" ", 3);

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
    <>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} />}
    </>
  );
}

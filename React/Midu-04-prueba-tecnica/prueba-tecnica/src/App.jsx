import { useEffect, useState } from 'react'
import './App.css'
// Endpoint de la API de gatos
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

// Endpoint de la imagen de la API de gatos
const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true"}`;

//Prefijo de la API de gatos
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
<<<<<<< HEAD
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
=======
  const [fact, setFact] = useState('cargando...')
>>>>>>> fb363181cd04683a7fa4141ec20f721ae97eb605

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
<<<<<<< HEAD

        const threeFirstWords = fact.split(' ', 3).join()
        
        fetch(CAT_ENDPOINT_IMAGE_URL)
          .then((res) => res.json())
          .then((response) => {
            const { url } = response
            setImageUrl(url)
          })
      })
=======
      }

      )
>>>>>>> fb363181cd04683a7fa4141ec20f721ae97eb605
  }, [])

  return (
    <div>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Imagen extraida usando primeras 3 palabras desde ${fact}`} />}
    </div>
  )
}

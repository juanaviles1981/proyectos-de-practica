import "./App.css";
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp</h1>

        <Testimonio
          nombre="Shawn Wang"
          pais="Singapur"
          imagen="shawn"
          cargo="Ing de Software"
          empresa="Amazon"
          testimonio="Sed ultrices mauris et felis lobortis iaculis. Quisque facilisis dolor augue, in efficitur lacus condimentum sit amet. Maecenas congue arcu vitae aliquet bibendum. Vestibulum at metus eget lorem mattis porta at ac lectus. Nunc odio nisi, interdum lacinia nisl eget, fermentum consectetur tortor. Integer maximus ante ac ante interdum gravida. Ut ornare lobortis quam quis scelerisque. Donec fringilla massa quis nunc cursus, vitae euismod quam vulputate."
        />
        <Testimonio
          nombre="Sarah Chima"
          pais="Nigeria"
          imagen="sarah"
          cargo="Ing. de software"
          empresa="ChatDesk"
          testimonio="Sed ultrices mauris et felis lobortis iaculis. Quisque facilisis dolor augue, in efficitur lacus condimentum sit amet. Maecenas congue arcu vitae aliquet bibendum. Vestibulum at metus eget lorem mattis porta at ac lectus. Nunc odio nisi, interdum lacinia nisl eget, fermentum consectetur tortor. Integer maximus ante ac ante interdum gravida. Ut ornare lobortis quam quis scelerisque. Donec fringilla massa quis nunc cursus, vitae euismod quam vulputate."
        />
        <Testimonio
          nombre="Ema Bostian"
          pais="Suecia"
          imagen="emma"
          cargo="Ing. de software"
          empresa="Spotify"
          testimonio="Sed ultrices mauris et felis lobortis iaculis. Quisque facilisis dolor augue, in efficitur lacus condimentum sit amet. Maecenas congue arcu vitae aliquet bibendum. Vestibulum at metus eget lorem mattis porta at ac lectus. Nunc odio nisi, interdum lacinia nisl eget, fermentum consectetur tortor. Integer maximus ante ac ante interdum gravida. Ut ornare lobortis quam quis scelerisque. Donec fringilla massa quis nunc cursus, vitae euismod quam vulputate."
        />
      </div>
    </div>
  );
}

export default App;

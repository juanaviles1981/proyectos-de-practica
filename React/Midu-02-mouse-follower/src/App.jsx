import { useEffect, useState } from "react";

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // console.log(position);

  useEffect(() => {
    // console.log("efecto", { enabled })
    const handlemove = (event) => {
      const { clientX, clientY } = event;
      // console.log('handleMove', {clientX, clientY})
      setPosition({ x: clientX, y: clientY });
      console.log(clientX, clientY);
    };
    if (enabled) {
      window.addEventListener("pointermove", handlemove);
    }

    // !cleanup
    // cuando el componente se desmonta
    // cuando cambian las dependencias, antes de ejecutar
    return () => {
      window.removeEventListener("pointermove", handlemove);
    };
  }, [enabled]);

  useEffect(() => {
    document.body.classList.toggle("no-cursor", enabled);
    return () => {
      document.body.classList.remove("no-cursor");
    };
  }, [enabled]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>

      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "desactivar" : "activar"} seguir puntero
      </button>
    </>
  );
};

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  );
}

export default App;

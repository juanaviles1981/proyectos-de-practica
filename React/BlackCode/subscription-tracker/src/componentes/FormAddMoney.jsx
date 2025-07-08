import { useState } from "react";

const FormAddMoney = ({ setCount, setIsValid }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();

    if (input === "" || Number(input) <= 0) {
      setError(true);
      return;
    }

    setError(false);
    setCount(Number(input)); //Envia el input a App.jsx
    setIsValid(true) // envia true a App.jsx para renderizado condicional
    };

  return (
    <div className="form-add-money">
      <form onSubmit={handleForm}>
        <p>Agregar presupuesto</p>
        <input
          type="number"
          placeholder="$300"
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" value="Agregar" />
      </form>
      {error ? <p className="error">Presupuesto inválido</p> : null}
    </div>
  );
};

export default FormAddMoney;

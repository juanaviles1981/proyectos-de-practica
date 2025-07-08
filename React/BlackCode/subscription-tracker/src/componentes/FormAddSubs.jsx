import { useState } from "react";
function FormAddSubs({ type, setType, price, setPrice, subs, setSubs }) {
  const [error, setError] = useState(false);

  const handleSubs = (e) => {
    e.preventDefault();
    if (price === "" || Number(price) <= 0 || type === "") {
      setError(true);
      return;
    }
    setError(false);

    const data = {
      type: type,
      price: price,
      id: Date.now()
    };

    setSubs([...subs, data]);
    setType("");
    setPrice("");
 
  };

  return (
    <div className="add-subscription">
      <h3>Agregar Suscripciones</h3>
      <form onSubmit={handleSubs}>
        <p>Servicio</p>
        <select onChange={(e) => setType(e.target.value)} value={type}>
          <option value=""> -- Elegir --</option>
          <option value="netflix">Netflix</option>
          <option value="disneyPlus">Disney Plus</option>
          <option value="hnoMax">HBO Max</option>
          <option value="starPlus">Star Plus</option>
          <option value="primeVideo">Prime Video</option>
          <option value="spotify">Spotify</option>
          <option value="appletv">Apple tv</option>
        </select>
        <p>Cantidad</p>
        <input
          type="number"
          placeholder="$20"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <input type="submit" value="Agregar" />
      </form>
      {error ? <p className="error">Campos inválidos</p> : null}
    </div>
  );
}
export default FormAddSubs;

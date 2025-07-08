import { moneyFormat } from "./helpers";
export default function SingleItem({ price, type, id }) {
  
const imageSrc = `/images/${type}.png`;

return (
    <div className="single-item">
      <img src={imageSrc} alt="Services" />
      <h3>Precio: {moneyFormat(Number(price))}</h3>
      <a href="">Borrar</a>
      <a href="">Editar</a>
    </div>
  );
}

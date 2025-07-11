import { moneyFormat } from "./helpers";
export default function SingleItem({
  price,
  type,
  id,
  eliminarItem,
  editItem,
}) {
  const imageSrc = `/images/${type}.png`;

  const handleDelete = (e) => {
    e.preventDefault();
    const answer = window.confirm(`Borrar subscripción a ${type}?`);
    if (answer) {
      eliminarItem(id);
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    editItem(id);
  };

  return (
    <div className="single-item">
      <img src={imageSrc} alt="Services" />
      <h3>Precio: {moneyFormat(Number(price))}</h3>
      <a href="" className="delete" onClick={handleDelete}>
        Borrar
      </a>
      <a href="" className="edit" onClick={handleEdit}>
        Editar
      </a>
    </div>
  );
}

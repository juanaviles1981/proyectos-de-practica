import { moneyFormat } from "./helpers";
<<<<<<< HEAD
export default function SingleItem({ price, type, id, eliminarItem, editItem }) {
=======
export default function SingleItem({
  price,
  type,
  id,
  eliminarItem,
  editItem,
}) {
>>>>>>> 47551efdf6dc82cbf12956e6155ae63050c8415a
  const imageSrc = `/images/${type}.png`;

  const handleDelete = (e) => {
    e.preventDefault();
    const answer = window.confirm(`Borrar subscripción a ${type}?`);
    if (answer) {
      eliminarItem(id);
    }
  };

<<<<<<< HEAD
  const handleEdit = e =>{
    e.preventDefault();
    editItem(id);
  }
=======
  const handleEdit = (e) => {
    e.preventDefault();
    editItem(id);
  };

>>>>>>> 47551efdf6dc82cbf12956e6155ae63050c8415a
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

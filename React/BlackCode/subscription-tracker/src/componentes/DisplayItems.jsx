import SimpleItem from "./SingleItem";
export default function DisplayItems({
  subs,
  eliminarItem,
  editItem,
  setEditId,
}) {
  return (
    <>
      <h2>Suscripciones</h2>
      {subs.map((item) => (
        <SimpleItem
          key={item.id}
          id={item.id}
          price={item.price}
          type={item.type}
          eliminarItem={eliminarItem}
          editItem={editItem}
          setEditId={setEditId}
        />
      ))}
    </>
  );
}

import SimpleItem from "./SingleItem";
export default function DisplayItems({
  subs,
  eliminarItem,
  editItem,
  setEditId,
}) {
  return (
<<<<<<< HEAD
   <>
    <h2>Suscripciones</h2>
    {
        subs.map(item => (
            <SimpleItem 
            key={item.id}
            id={item.id} 
            price={item.price} 
            type={item.type} 
            eliminarItem={eliminarItem}
            editItem={editItem}
          />
        ))
    }

   </>
  )
=======
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
>>>>>>> 47551efdf6dc82cbf12956e6155ae63050c8415a
}

import Balance from "./Balance";
import DisplayItems from "./DisplayItems";
import FormAddSubs from "./FormAddSubs";
import { useState } from "react";

const MainControl = ({ count }) => {
  const [subs, setSubs] = useState([]); // 3 Aca guardan las subs
  const [type, setType] = useState(""); //1 tipo de sub
  const [price, setPrice] = useState(""); //2 precio de sub
<<<<<<< HEAD
  const [editId, setEditID] = useState("");
=======
  const [editID, setEditId] = useState(""); //4 se controla si se esta editando un campo
  const [spent, setSpent] = useState(0)
>>>>>>> 47551efdf6dc82cbf12956e6155ae63050c8415a

  const eliminarItem = (id) => {
    const newList = subs.filter((item) => item.id !== id);
    setSubs(newList); //Elimina el item
  };

<<<<<<< HEAD
  const editItem = id => {
    setEditID(id)
    subs.map(item => {
      if(item.id === id){
        setType(item.type)
        setPrice(item.price)
=======
  const editItem = (id) => {
    setEditId(id);
    subs.map((item) => {
      if (item.id === id) {
        setType(item.type);
        setPrice(item.price);
>>>>>>> 47551efdf6dc82cbf12956e6155ae63050c8415a
      }
    });
  };

  return (
    <>
      <div className="main-form">
        <Balance 
          count={count} 
          subs={subs}
          spent={spent}
          setSpent={setSpent}/>
        <FormAddSubs
          setType={setType}
          setPrice={setPrice}
          type={type}
          price={price}
          setSubs={setSubs}
          subs={subs}
          editID={editID}
          setEditId={setEditId}
          spent={spent}
          count={count}
        />
      </div>
      <DisplayItems
        subs={subs}
<<<<<<< HEAD
        editId={editId}
        setEditID={setEditID}
=======
        eliminarItem={eliminarItem}
        editItem={editItem}

>>>>>>> 47551efdf6dc82cbf12956e6155ae63050c8415a
      />
    </>
  );
};

export default MainControl;

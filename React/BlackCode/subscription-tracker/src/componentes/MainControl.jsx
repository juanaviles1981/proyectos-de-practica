import Balance from "./Balance";
import DisplayItems from "./DisplayItems";
import FormAddSubs from "./FormAddSubs";
import { useState } from "react";

const MainControl = ({ count }) => {
  const [subs, setSubs] = useState([]); // 3 Aca guardan las subs
  const [type, setType] = useState(""); //1 tipo de sub
  const [price, setPrice] = useState(""); //2 precio de sub
  const [editID, setEditId] = useState(""); //4 se controla si se esta editando un campo
  const [spent, setSpent] = useState(0)

  const eliminarItem = (id) => {
    const newList = subs.filter((item) => item.id !== id);
    setSubs(newList); //Elimina el item
  };

  const editItem = (id) => {
    setEditId(id);
    subs.map((item) => {
      if (item.id === id) {
        setType(item.type);
        setPrice(item.price);
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
        eliminarItem={eliminarItem}
        editItem={editItem}

      />
    </>
  );
};

export default MainControl;

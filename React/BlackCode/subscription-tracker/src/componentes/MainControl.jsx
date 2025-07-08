import Balance from "./Balance";
import DisplayItems from "./DisplayItems";
import FormAddSubs from "./FormAddSubs";
import { useState } from "react";

const MainControl = ({ count }) => {
  const [subs, setSubs] = useState([]); // 3 Aca guardan las subs
  const [type, setType] = useState(""); //1 tipo de sub
  const [price, setPrice] = useState(""); //2 precio de sub

  return (
    <>
    <div className="main-form">
      <Balance count={count} />
      <FormAddSubs
        setType={setType}
        setPrice={setPrice}
        type={type}
        price={price}
        setSubs={setSubs}
        subs={subs}
      />
    </div>
    <DisplayItems subs={subs} />
    </>
    
  );
};

export default MainControl;

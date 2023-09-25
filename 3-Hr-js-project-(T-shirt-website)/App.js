import React, { useState } from "react";
import Card from "./COMPONENT/UI/Card";
import "./App.css";
import EntryForm from "./COMPONENT/Form/EntryForm";

import CartButton from "./COMPONENT/CART/CartButton";

function App() {
  const [TshirtData, setTshirtData] = useState([]);

  const newTshirtHandler = (newData) => { setTshirtData((prevData) => [...prevData, newData]) }

  return (
    <div>

      <h1 style={{ textAlign: "center" }}>Tshirt-DATA-ENTRY</h1>
     
      <header>
        <CartButton />
        <EntryForm newData={newTshirtHandler} />
      </header>
      <Card>
        {TshirtData.map((Tshirt, index) => (
          <div key={index}>
            {Tshirt.NAME}-{Tshirt.DESCRIPTION}-{Tshirt.PRICE}-{Tshirt.QUANTITY}
            <button>Add to cart</button>
          </div>
        ))}</Card>


    </div>
  );
}

export default App;


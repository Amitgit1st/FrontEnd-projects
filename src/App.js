import React,{Fragment} from "react";
import Header from "./COMPONENT/LAYOUT/Header";
import Meals from "./COMPONENT/MEALS/Meals";
import Cart from "./COMPONENT/CART/Cart";

function App() {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;

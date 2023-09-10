import React,{Fragment,useState} from "react";
import Header from "./COMPONENT/LAYOUT/Header";
import Meals from "./COMPONENT/MEALS/Meals";
import Cart from "./COMPONENT/CART/Cart";
import CartProvider from "./STORE/CartProvider";

function App() {
  const [cartIsShown,setcartIsShown]=useState(false);

  const showCartHandler=()=>{
    setcartIsShown(true);
  }

  const hideCartHandler=()=>{
    setcartIsShown(false);
  }
  
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;

    </Fragment>
  );
}

export default App;

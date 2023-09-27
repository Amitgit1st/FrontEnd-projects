import React,{useState} from 'react';
import NavBar from './COMPONENT/LAYOUT/Navbar';
import './App.css';
import Product from './COMPONENT/PRODUCT/Product';
import Bottom from './COMPONENT/LAYOUT/Bottom';
import Cart from './COMPONENT/CART/Cart';



function App() {
  const[cartIsShown,setCartIsShown]=useState(false)
  const showCartHandler=()=>{
    setCartIsShown(true)
  }
  return (
    <>

      <NavBar showCart={showCartHandler}/>
      <div>
        <h1 className="text-center  bg-secondary text-white p-5" style={{ fontSize: "50px" }}>The Generics</h1>
      </div>
      <Product />
      <div>
          <Bottom/>
      </div>
      {cartIsShown && <Cart/>}
    </>
  );
}

export default App;

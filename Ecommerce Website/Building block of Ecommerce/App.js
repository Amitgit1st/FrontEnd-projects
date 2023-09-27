import React from 'react';
import NavBar from './COMPONENT/LAYOUT/Navbar';
import './App.css';
import Product from './COMPONENT/PRODUCT/Product';
import Bottom from './COMPONENT/LAYOUT/Bottom';



function App() {
  return (
    <>

      <NavBar />
      <div>
        <h1 className="text-center  bg-secondary text-white p-5" style={{ fontSize: "50px" }}>The Generics</h1>
      </div>
      <Product />
      <div>
          <Bottom/>
      </div>
    </>
  );
}

export default App;

import React,{Fragment} from "react";
import Header from "./COMPONENT/LAYOUT/Header";
import MealsSummary from "./COMPONENT/MEALS/MealsSummary";

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <MealsSummary/>
      </main>
    </Fragment>
  );
}

export default App;

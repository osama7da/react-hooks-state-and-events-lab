import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {  
  const [mode , setMode] = useState(false) 


  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  function modeHandler (){ 
    setMode(!mode) 
  }


  return (
    <div className={`App ${mode ? "dark" : "light"}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={modeHandler}>{`${mode ? "Dark Mode" : "Light Mode"}`}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

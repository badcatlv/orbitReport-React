import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import { useState } from "react";
import satData from "./components/satData";
//import React from "react";

function App() {
  const [sat, setSat] = useState(satData);
  //sat = compares changes in state
  //setSat = is a function that will update the state
  //we set this equal to the function useState, useState is passed setData
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  //uses the Set method to create a new array that holds unique elements
  //and prevents duplicate elements, map alone would create ten buttons vs three 
  //we pull out the orbit type to create the three buttons
  const filterByType = (currentType) => { 
    const displaySats = satData.filter((newSatDisplay)=> {
      return newSatDisplay.orbitType === currentType
    });
    setSat(displaySats);
  }
  return (
    <div>
      <Banner />
      <Buttons 
      filterByType={filterByType}
      setSat={setSat}
      displaySats={displaySats}
      />
      <Table sat={sat}/>
    </div>
  );
}

export default App;

//create a variable to manage the state
//create a variable to hold the unique values (ie using map())
  //of the orbitType props of the satellite objects
//create a function that will filter through the satellites

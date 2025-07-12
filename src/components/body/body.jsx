import { useState } from "react";
import "./body.css";
import Filter from "./components/filters/filters";
import Skillsense from "./skillsense/skillsense";
import TableContent from "./TableContent/TableContent";


const Body = () => {


  return (
    <> 
    <div className="bodyDiv">

    <Filter/>
    <Skillsense/>
    
    </div>


    </>
  );
};

export default Body;

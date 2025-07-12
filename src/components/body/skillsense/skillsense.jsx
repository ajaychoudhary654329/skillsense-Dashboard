import React, { useState } from "react";
import './skillsense.css';
import { Tabs, Tab } from "@mui/material";
import TableContent from "../TableContent/TableContent";

const Skillsense = ()=>{

    
    const[selectedTab , setSelectedTab] = useState(0);

    const handleTabChange = (event , newValue)=>{
      setSelectedTab(newValue);
    }  

    const renderTabContent = () => {
    switch (selectedTab) {
      case 0:
        return <TableContent/>;
      case 1:
        return <div><p>Deployment content </p></div>;
      case 2:
        return <div><p>On The Job Training Content </p></div>;
      case 3:
        return <div><p>Skill Matrix Content</p></div>;
      case 4:
        return <div><p>Reports Content </p></div>;
      default:
        return null;
    }
  }

  

    return(
      <>

      <div className="parent">

        <div className="skillsense">

            <p> SKILLSENSE </p>

        </div>


        <div className="navbar">
            
        <Tabs
           
           value = {selectedTab}  
           onChange = {handleTabChange}
           textColor="primary"
           indicatorColor="primary"
           aria-label="Navigation tabs"
        >
          <Tab label ="Area Dashboard"/>
          <Tab label ="Deployment"/>
          <Tab label ="On The Job Training"/>
          <Tab label ="Skill Matrix"/>
          <Tab label ="Reports"/>

        </Tabs>

        </div>

      </div>

        <div className="tab-content">
          {renderTabContent()}
        </div>

      </>
    );
  }; 

export default Skillsense;


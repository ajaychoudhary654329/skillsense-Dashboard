import React, { useState } from "react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import './filters.css'
import { SelectBox } from "../common/selectBox";

const Filter = () => {

  const [site, setSite] = useState('');
  const [location, setLocation] = useState('');
  const [plant, setPlant] = useState('');
  const [label, setLabel] = useState('');

  return (

    <>

      <div className="Parent">

        <div className="first">

          <p className="pclass1">Area Dashboard </p>
          <span className="spanClass1" style={{ margin: '0px 5px 5px', fontWeight: '600' , color: 'black' }}>{">"}</span>
          <p className="pclass2"> Operators </p>

        </div>

        <div className="second">

          <SelectBox label={'Site'} options={[{ label: "MSIL", value: 'MSIL' }, { label: "MSIL1", value: 'MSIL1' }, {label:'MSIL2' , value:'MSIL2'}]} width={'80px'}/>
          
          <SelectBox label={'Location'} options={[{ label: "Gurgaon Vehicle Plant", value: 'Gurgaon Vehicle Plant' }, { label: "Delhi vehicle plant", value: 'Delhi vehicle plant' }, {label:'Goa vehicle plant' , value : 'Goa vehicle plant'}]} 
          width={'180px'}/>
         
          <SelectBox label={'Plant'} options={[{ label: "PLT-GP1", value: 'PLT-GP1' }, { label: "PLT-GP2", value: 'PLT-GP2' }, {label:'PLT-GP3' , value:'PLT-GP3'}]} width={'80px'}/>
          
         <SelectBox label={'Label'} options={[{ label: "AS1", value: 'AS1' }, { label: "AS2", value: 'AS2' }, {label:'AS3' ,value:'AS3'}]} width={'80px'}/>

          <div className="button1"> 

            <button className="button2">More</button>

          </div>

        </div>

      </div>
    </>
  );
};

export default Filter; 

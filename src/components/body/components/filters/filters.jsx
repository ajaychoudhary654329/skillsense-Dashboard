import React, { useState } from "react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import './filters.css'
import { SelectBox } from "../common/selectBox";
import { VerticalAlignBottom } from "@mui/icons-material";
import { Link } from 'react-router-dom';

const Filter = () => {

  const [site, setSite] = useState('');
  const [location, setLocation] = useState('');
  const [plant, setPlant] = useState('');
  const [label, setLabel] = useState('');

  const [anchorEl, setanchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMoreClick = (event) => {
    console.log('clicked')
    setanchorEl(event.currentTarget);

  }

  const handleClose = () => {
    setanchorEl(null);
  }

  return (

    <>

      <div className="Parent">

        <div className="first">

          <p className="pclass1">Area Dashboard </p>
          <span className="spanClass1" style={{ margin: '0px 5px 5px', fontWeight: '600', color: 'black' }}>{">"}</span>
          <p className="pclass2"> Operators </p>

        </div>

        <div className="second">

          <SelectBox label={'Site'} options={[{ label: "MSIL", value: 'MSIL' }, { label: "MSIL1", value: 'MSIL1' }, { label: 'MSIL2', value: 'MSIL2' }]} width={'80px'} />

          <SelectBox label={'Location'} options={[{ label: "Gurgaon Vehicle Plant", value: 'Gurgaon Vehicle Plant' }, { label: "Delhi vehicle plant", value: 'Delhi vehicle plant' }, { label: 'Goa vehicle plant', value: 'Goa vehicle plant' }]}
            width={'180px'} />

          <SelectBox label={'Plant'} options={[{ label: "PLT-GP1", value: 'PLT-GP1' }, { label: "PLT-GP2", value: 'PLT-GP2' }, { label: 'PLT-GP3', value: 'PLT-GP3' }]} width={'80px'} />

          <SelectBox label={'Label'} options={[{ label: "AS1", value: 'AS1' }, { label: "AS2", value: 'AS2' }, { label: 'AS3', value: 'AS3' }]} width={'80px'} />

          <div className="button1">

            <button className="button2" onClick={handleMoreClick}>More</button>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link to="about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
              </MenuItem>
              <MenuItem onClick={handleClose} >
                <Link to='dashboard' style={{ textDecoration: 'none', color: 'inherit' }}>Dashboard </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to='mock-tests' style={{ textDecoration: 'none', color: 'inherit' }}>MockTests </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to='report' style={{ textDecoration: 'none', color: 'inherit' }}>Reports </Link>
              </MenuItem>
            </Menu>

          </div>

        </div>

      </div>
    </>
  );
};

export default Filter; 

import React, { useState } from "react";
import myimage from "../../assets/Blue_hamburger.png";
import myimage2 from "../../assets/IoTLogo.png";
import myimage3 from "../../assets/searchBarlogo.png";
import myimage4 from "../../assets/Marutilogo.png";
import myimage5 from "../../assets/home_icon.png";
import myimage6 from "../../assets/human_icon.png";

import myimage7 from "../../assets/down_arrow.png";
import "./header.css";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Divider } from "@mui/material";  

const options = [
  "John smith",
  "Sherlock Holmes",
  "Jude law",
  "jack charlie",
  " Mark rubio ",
  " Jackson white ",
];

const ITEM_HEIGHT = 48;

const Header = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(options[0]);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuSelect = (option) => {
    setValue(option);
    setAnchorEl(null);
  };
  return (
    <>
      <div className="parent-div-of-header">
        <div className="header-section1">
          <img src={myimage} alt="hamburger-icon" className="images01" />
          <img src={myimage2} alt="Iot_logo" className="images1" />
          <img src={myimage3} alt="search-icon" className="image1" />
        </div>

        <div className="header-section2">
          <img src={myimage4} alt="Maruti-logo" className="image2" />
        </div>

        <div className="header-section3">
          <div className="header-section3-child1">
            <img src={myimage5} alt="home-icon" className="home-icon-class" />
          </div>
          <div className="header-section3-child2">
            <div className="select-wrapper">
              <p>{value}</p>
            </div>

            <div className="human-icon-class">
              <img
                src={myimage6}
                alt="human-icon"
                className="human-icon-class"
              />
            </div>
            <div>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <img src={myimage7} alt="" />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                  paper: {
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "20ch",
                    },
                  },
                  list: {
                    "aria-labelledby": "long-button",
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem
                    key={option}
                    selected={value === option}
                    onClick={() => handleMenuSelect(option)}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>
        </div>
      </div>
      <Divider sx={{my:0,
        backgroundColor:"#d0d2d4",
        height:"0px",
      }}/>
      
    </>
  );
};

export default Header;
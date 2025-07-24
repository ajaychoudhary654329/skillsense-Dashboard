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
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const options = [
  "John smith",
  "Sherlock Holmes",
  "Jude law",
  "jack charlie",
  " Mark rubio ",
  " Jackson white ",
];

const ITEM_HEIGHT = 48;

const Header = ({ cart }) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(options[0]);
  const open = Boolean(anchorEl);
  const [cartAnchorEl, setCartAnchorEl] = useState(null);
  const cartItems = useSelector((state) => state.cart.items);

  // cart logic over here 

  const handleCartclick = (event) => {
    setCartAnchorEl(event.currentTarget);
  }
  const handleCartClose = () => {
    setCartAnchorEl(null)
  }

  // menu items opening logic over here 
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


            {/* Cart icon with badge showing number of items */}
            <Link to="/cart">
              <Badge
                badgeContent={cartItems.length > 0 ? `+${cartItems.length}` : null}
                color="error"
                overlap="circular"
                sx={{
                  position: 'relative',
                  top: '-8px',
                  right: '-8px',
                  '& .MuiBadge-badge': {
                    fontSize: '0.75rem',
                    padding: '0 6px',
                    borderRadius: '8px',
                    backgroundColor: '#f44336',
                    color: 'white',
                  },
                }}
              >
                <IconButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="home-icon-class"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6" />
                  </svg>
                </IconButton>
              </Badge>

            </Link>
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
                <img src={myimage7} />
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
      <Divider sx={{
        my: 0,
        backgroundColor: "#d0d2d4",
        height: "0px",
      }} />

    </>
  );
};

export default Header;
import React from 'react';
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
// import AddIcon from '@mui/icons-material/Add';
import { removeFromCart } from '../../redux/cartSlice';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  // handler for removing the employees from the cart and removeFromCart reducer (function ) is present in Cartslice.js
  const handleRemove = (employee, idx) => {
    dispatch(removeFromCart(employee))
  }

  return (
    <div className='parent-div'>
      <div className='card-div'>
        {cartItems.length === 0 ? (
          <p style={{ fontSize: '18px', color: '#777', textAlign: 'center' }}>
            🛒 Your cart is empty.
          </p>
        ) : (
          <div className='parentdiv-employeebar11'>
            {cartItems.map((emp, idx) => (
              <div className='employee11' key={idx}>
                <div className='employeedetails11'>
                  <div className='div-for-image'>
                    <img src={emp.image} alt={emp.name} />
                  </div>
                  <div className='div-for-code-and-id'>
                    <p className='para1'>{emp.name}</p>
                    <p className='para2'>{emp.id} | {emp.code}</p>
                  </div>
                </div>

                <div className='childidv-for-minus-icon'>
                  <IconButton
                    aria-label="remove from cart"
                    onClick={() => handleRemove(emp.id)}
                    sx={{
                      backgroundColor: "var(--primary)",
                      color: "#fff",
                      width: 25,
                      height: 25,
                      '&:hover': {
                        backgroundColor: "#c62828",
                      },
                    }}
                  >
                    <RemoveIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

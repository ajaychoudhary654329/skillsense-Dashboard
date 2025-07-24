import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import myimage10 from '../../../../assets/circle_personlogo.png';
import EmployeeDetails from '../EmployeeDetails/employeeDetails';
import './employeeBar.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../redux/cartSlice';
import { useSelector } from 'react-redux';


const EmployeeBar = ({ state, onLengthChange, onAddToCart }) => {
  const [data, setData] = useState([]);
  // const [addedIdx, setAddedIdx] = useState(null);
  const [addedEmployees, setAddedEmployees] = useState(new Set());
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();



  const employees = [
    { name: "Ujjwal Sharma", status: true, id: "660669", code: "TW", image: myimage10 },
    { name: "Raj Kumar", status: true, id: "660659", code: "TW", image: myimage10 },
    { name: "Kumar Pandey", status: true, id: "660677", code: "A0", image: myimage10 },
    { name: "Shubham ", status: true, id: "660684", code: "A0", image: myimage10 },
    { name: "Mohd Azruddin", status: true, id: "660704", code: "TW", image: myimage10 },
    { name: "Kuldeep", status: true, id: "660705", code: "A0", image: myimage10 },
    { name: "Ankit", status: true, id: "660709", code: "A0", image: myimage10 },
    { name: "Tanshika", status: false, id: "665432", code: "A1", image: myimage10 },
    { name: "Amisha", status: false, id: "662332", code: "A5", image: myimage10 },
  ];

  useEffect(() => {
    const filteredActive = employees.filter(emp => emp.status === true);
    const filteredInactive = employees.filter(emp => emp.status === false);
    const filtered = employees.filter(emp => emp.status === state);
    setData(filtered);

    onLengthChange({
      active: filteredActive.length,
      inactive: filteredInactive.length,
    });

  }, [state]);

  // Handler for adding employee to cart
  const handleAddToCart = (employee) => {
    dispatch(addToCart(employee))
  };


  return (
    <div className='parentForBoth'>
      <div className='parentdiv-employeebar'>
        {data.map((emp, idx) => (
          <div className='employee' key={idx}>
            {/* <img src={emp.image} alt={emp.name} /> */}
            <div className='employeedetails'>
              <div className='div-for-image'>

                <img src={emp.image} alt={emp.name} />
              </div>
              <div className='div-for-code-and-id'>

                <p className='para1'>{emp.name}</p>
                <p className='para2'>{emp.id} | {emp.code}</p>
              </div>
            </div>

            <div className='childidv-for-plus-icon'>
              {!cartItems.some(item => item.id === emp.id) && (
                <IconButton
                  aria-label="add to cart"
                  onClick={() => handleAddToCart(emp)}
                  sx={{
                    backgroundColor: "var(--primary)",
                    color: "#fff",
                    width: 25,
                    height: 25,
                    '&:hover': {
                      backgroundColor: "var(--primary)",
                    },
                  }}
                >
                  <AddIcon sx={{ fontSize: 18 }} />
                </IconButton>
              )}
              {cartItems.some(item => item.id === emp.id) && (
                <span style={{ color: '#1976d2', fontSize: 14, marginLeft: 8, whiteSpace: 'nowrap' }}>Added to cart!</span>
              )}
            </div>

          </div>
        ))}
      </div>

      <div className='parentdiv-employeeDetails'>
        <EmployeeDetails />
      </div>
    </div >
  );
};

export default EmployeeBar;

import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import myimage10 from '../../../../assets/circle_personlogo.png';
import EmployeeDetails from '../EmployeeDetails/employeeDetails';
import './employeeBar.css';

const EmployeeBar = ({ state, onLengthChange, onAddToCart }) => {
  const [data, setData] = useState([]);
  const [addedIdx, setAddedIdx] = useState(null);

  const employees = [
    { name: "Ujjwal Sharma", status: true, id: "660669", code: "TW", image: myimage10 },
    { name: "Raj Kumar", status: true, id: "660669", code: "TW", image: myimage10 },
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
    console.log(data);

  }, [state]);

  // Handler for adding employee to cart
  const handleAddToCart = (employee, idx) => {
    // TODO: Implement cart logic here
    setAddedIdx(idx);
    console.log('Add to cart:', employee);
    onAddToCart(employee);
    setTimeout(() => setAddedIdx(null), 1200); // Hide message after 1.2s
  };

  return (
    <div className='parentForBoth'>
      <div className='parentdiv-employeebar'>
        {data.map((emp, idx) => (
          <div className='employee' key={idx}>
            <img src={emp.image} alt={emp.name} />
            <div className='employeedetails'>
              <p className='para1'>{emp.name}</p>
              <p className='para2'>{emp.id} | {emp.code}</p>
            </div>
            <IconButton
              aria-label="add to cart"
              onClick={() => handleAddToCart(emp, idx)}
              sx={{
                backgroundColor: "var(--primary)",
                color: "#fff",
                width: 15,
                height: 15,
                '&:hover': {
                  backgroundColor: "var(--primary)",
                },
              }}
            >
              <AddIcon sx={{ fontSize: 18 }} />
            </IconButton>
            {addedIdx === idx && (
              <span style={{ color: '#1976d2', fontSize: 12, marginLeft: 8 }}>Added to cart!</span>
            )}
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

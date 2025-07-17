import React from 'react';
import './SelectBox2.css';

export const SelectBox2 = ({

    label , 
    options , 
    value , 
    onChange , 
   width = '180px',
   disabled = false,
   labelcolor = 'var(--font-greycolor)'

}) => {
    return (

       <div  className="custom-selector">
            {label && <label style={{color:labelcolor , fontWeight:'600'}}>{label}:</label>}
            <select
                value={value}
                onChange={onChange}
                disabled={disabled}
                style={{
                    borderRadius: '4px',
                    border: 'none',
                    width: width,
                    backgroundColor: disabled ? '#ffffff' : '#ffffff',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                    outline:'none',
                }}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div> 
    );
};
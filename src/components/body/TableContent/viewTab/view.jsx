import React, { useEffect, useState } from "react";
import "./view.css";
import myimage8 from "../../../../assets/human_icon.png";
import { Tabs, Tab, Box, TextField, InputAdornment } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import ViewListIcon from '@mui/icons-material/ViewList';
import EmployeeBar from "../EmployeeBar/employeeBar";
import EmployeeDetails from "../EmployeeDetails/employeeDetails";
import Switch from '@mui/material/Switch';
import SearchIcon from '@mui/icons-material/Search';

// import { TextField, InputAdornment, IconButton } from '@mui/material';

const View = () => {


    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const [searchText, setSearchText] = useState('');

    const handleClear = () => {
        setSearchText('');
    }
    const [checked, setChecked] = useState(true);
    const [selectedTab, setSelectedTab] = useState(0);
      const [employeeCount, setEmployeeCount] =useState({ active: 0, inactive: 0 })

    useEffect(()=>{
        
        
    },[checked])

    const handleLengthUpdate = (length) => {
    setEmployeeCount(length);
  };


    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    }

    const renderTabContent = () => {

        switch (selectedTab) {
            case 0:
                return <div><EmployeeBar state = {checked} onLengthChange={handleLengthUpdate}  /> </div>;
            case 1:
                return <div><p>No content , so just hello</p></div>;
        }
    }

    return (
        <>

            <div className="parentDiv">

                <div className="buttonsDiv">

                    <p style={{ padding: 10, fontWeight: 600 }}>View:</p>

                    <Box
                        sx={{
                            backgroundColor: '#fff',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            display: 'inline-flex',
                            // boxShadow: '0 0 2px rgba(0,0,0,0.2)'
                        }}
                    >
                        <Tabs
                            value={selectedTab}
                            onChange={handleTabChange}
                            variant="fullWidth"
                            TabIndicatorProps={{ style: { display: 'none' } }} // hide default underline
                            sx={{
                                minHeight: '40px',
                                '& .MuiTab-root': {
                                    minHeight: '40px',
                                    textTransform: 'none',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                    padding: '6px 16px',
                                    borderRadius: 0,
                                    display: 'flex',
                                    gap: 1,
                                    color: '#000'
                                },

                                '& .Mui-selected': {
                                    backgroundColor: '#171C8F',
                                    color: '#fff !important', // text has to become white 
                                },
                                '& .Mui-selected .MuiTab-iconWrapper': {
                                    color: '#fff', // icons will have to become white 
                                },
                                '& .MuiTabs-flexContainer': {
                                    border: '1px solid #ccc',
                                    borderRadius: '6px',
                                }
                            }}
                        >
                            <Tab icon={<img src={myimage8} style={{ height: 20, width: 20 }}></img>} label="Operators" iconPosition="start" />
                            <Tab icon={<ViewListIcon />} label="Stations" iconPosition="start" />
                        </Tabs>
                    </Box>
                </div>

                <div className="parent1Div">

                    <div className="active-InactiveTabs">

                        <p style={{ color: checked ? "black" : "grey", fontWeight: 600 }}>Active({employeeCount.active || 0})</p>

                        <Switch {...label}
                            checked={checked}
                            onChange={(event) => setChecked(event.target.checked)}
                            sx={{

                                '& .MuiSwitch-switchBase.Mui-checked': {
                                    color: '#4246a5',
                                },
                                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                    backgroundColor: '#4246a5',
                                },
                            }}
                        />
                        <p style={{ color: checked ? "grey " : "black", fontWeight: 500 }}>Inactive({employeeCount.inactive || 0})</p>

                    </div>

                    <div className="SearchBox">

                        <TextField
                            variant="outlined"
                            placeholder="Search by Name , Staff-ID "
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}

                            InputProps={{

                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon style={{ color: 'var(--primary)' }} />
                                    </InputAdornment>
                                ),
                                style: {
                                    borderRadius: '7px',
                                    color: 'grey',
                                    fontWeight: '600',
                                    height: '40px'

                                }
                            }}

                        />
                    </div>

                </div>

            </div>


            <div className="tabRendering">

                {renderTabContent()}
            </div>


        </>
    );
};

export default View;
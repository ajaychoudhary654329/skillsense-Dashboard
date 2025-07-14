import './employeeDetails.css';
import myimage11 from '../../../../assets/circle_personlogo.png'
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { Tab , Tabs } from '@mui/material';
import Deployment from '../Deployment/Deployment';

const EmployeeDetails = () => {

     const [selectedTab , setSelectedTab ] = useState(0);
    
      const handleTabChange = (event , newValue )=>{
        setSelectedTab(newValue);
      }
    
      const renderTabContent=()=> {
          
        switch(selectedTab){
          case 0 : 
          return <div> <Deployment/> </div> ; 
          case 1 : 
          return <div> <p>No content for Attendance </p></div> ;
          case 2 : 
          return <div> <p>No content for Skills </p></div> ;
          case 3 : 
          return <div> <p>No content for ClassRoom Trainings</p></div>;
          default: 
          return null;
        }
      }


    return (
        <>

        <div className='container-for-employeeDetails '>

            <div className='parentdiv-for-employeedetails '>

                <div className='raj-kumar'>

                    <img src={myimage11} />

                    <div className='detailsof-employeer'>

                        <p className='p1'>Raj Kumar </p>
                        <p>660669 | TW </p>
                        <p><span className='s1'>Date of birth : </span> 12/11/2000</p>

                    </div>


                </div>

                <div className='dates-div'>

                    <p><span className='s2'>Joining Date : </span> 10/04/2023 </p>
                    <p><span className='s3'>Relieving Date : </span> 20/12/2023 </p>
                    <p className='p2'><span className='s4'>Relieving in : </span> 30 days</p>

                </div>


                <IconButton
                    aria-label="close"
                    sx={{
                        position: 'absolute',
                        top: 20,
                        right: 5,  
                        color: 'grey.600',
                    }}
                >
                    <CloseIcon />
                </IconButton>
              </div>

              <div className='tabsfor-otherStuff'>


                <Tabs
                  value = {selectedTab}
                  onChange={handleTabChange}
                  textColor = "primary"
                  indicatorColor = "primary"
                  aria-label = "Navigation Tabs"

                >
                  <Tab label="DEPLOYMENT " sx={{
                     '&.Mui-selected':{
                        fontWeight: 'bold',  // &mui slected is used for desgining the font to be bold 
                     } ,
                     '& .MuiTabs-indicator' : {
                         height: '2px',
                         fontWeight: 'bold', // this is used for making the line below the font to be bold 
                     }
                  }} /> 
                  <Tab label="ATTENDANCE " sx={{
                     '&.Mui-selected':{
                        fontWeight: 'bold',  // &mui slected is used for desgining the font to be bold 
                     } ,
                     '& .MuiTabs-indicator' : {
                         height: '2px',
                         fontWeight: 'bold', // this is used for making the line below the font to be bold 
                     }
                  }} />
                  <Tab label="SKILLS "sx={{
                    '&.Mui-selected':{
                        fontWeight: 'bold',  // &mui slected is used for desgining the font to be bold 
                     } ,
                     '& .MuiTabs-indicator' : {
                         height: '2px',
                         fontWeight: 'bold', // this is used for making the line below the font to be bold 
                     }
                  }} />
                  <Tab label="DEPLOYMENT "sx={{
                     '&.Mui-selected':{
                        fontWeight: 'bold',  // &mui slected is used for desgining the font to be bold 
                     } ,
                     '& .MuiTabs-indicator' : {
                         height: '2px',
                         fontWeight: 'bold', // this is used for making the line below the font to be bold 
                     }
                  }} />

                </Tabs>

            </div>
              
              <div className='navigationTabs'>

                {renderTabContent()}

            </div>

        </div>

        </>
    );
};


export default EmployeeDetails;

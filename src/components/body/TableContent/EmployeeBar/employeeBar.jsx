import myimage10 from '../../../../assets/circle_personlogo.png';
import EmployeeDetails from '../EmployeeDetails/employeeDetails';
import './employeeBar.css'; 



const EmployeeBar = ()=>{

  return(
  
     <> 
       
        <div className='parentForBoth'>


        <div className='parentdiv-employeebar'>
          
         <div className='employee1'>
             
          <img src={myimage10} /> 

          <div className='employeedetails1'>

              <p className='para1'>Ujjwal Sharma</p>
              <p className='para2'> 660638 | A0 </p>

          </div>
           
         </div>





        </div>











        <div className='parentdiv-employeeDetails'>
         
         <EmployeeDetails/>

        </div>


      </div>
     
     </>

  );

};

export default EmployeeBar ; 



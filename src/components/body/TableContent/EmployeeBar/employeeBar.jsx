import myimage10 from '../../../../assets/circle_personlogo.png';
import EmployeeDetails from '../EmployeeDetails/employeeDetails';
import './employeeBar.css'; 


const EmployeeBar = ()=>{

  const employees = [  {
    name : "Ujjwal Sharma " ,
    id: "660669",
    code : " TW " ,
    image : myimage10 , 
  } ,  {
    name : "Raj Kumar " ,
    id: "660669",
    code : " TW " ,
    image : myimage10 , 
  } , {
     name : "Bambam Kumar Pandey",
     id : " 660677",
     code : " A0",
     image : myimage10 
  } , {
     name : " Shubham Kumar" ,
     id: "660684" ,
     code : "A0" ,
     image : myimage10 
  } ,{
    name : " Mohd Azruddin ",
    id : "660704 ",
    code : "TW ",
    image : myimage10 
  } ,{
    name : "Kuldeep Oragon " ,
    id : " 660705 ",
    code : " A0",
    image : myimage10 
  } , { 
    name : "Ankit",
    id : " 660709",
    code : " A0",
    image: myimage10 , 
  } , { 
    name : "Tanshika ",
    id : " 665432" , 
    code : "A1",
    image: myimage10 
  } , { 
    name : "Amisha ",
    id : " 662332" , 
    code : "A5",
    image: myimage10 
  }
]

  return(

     <> 
        <div className='parentForBoth'>


        <div className='parentdiv-employeebar'>
         
          {employees.map((emp , idx )=> (

           <div className='employee' key={idx}>
          
            <img src={emp.image} /> 
         
            <div className='employeedetails'>

              <p className='para1'>{emp.name}</p>
              <p className='para2'> {emp.id} | {emp.code} </p>

          </div>
           
         </div>
          ))}
        </div>

        <div className='parentdiv-employeeDetails'>
         
         <EmployeeDetails/>

        </div>


      </div>
     
     </>

  );

};

export default EmployeeBar ; 



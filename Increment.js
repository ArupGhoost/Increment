import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
// import Add from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './Increment.css'

function Increment() {

     const[newNumber, setnewNumber] = useState(0)

     const addNumber = () =>{
       
        if(newNumber < 10){
            setnewNumber(newNumber + 1)
        }else {
            setnewNumber(10)
            alert('Number Exceeded ')
        }
     }

     const minusNumber = () => {
           if(newNumber > 0){
               setnewNumber(newNumber - 1);
           }else{
               setnewNumber(0);
               alert('nope')
        
           }
     }

    return (
        <>
           
           <div className='main'>
            <div className='main2'>
            <h1>
               {newNumber}
            </h1>
            </div><br />
            <button onClick={addNumber} className='button1'><AddIcon /></button>
            <br/>
            <button onClick={minusNumber} className='button2'><RemoveIcon /></button>
            </div> 
        </>
    )
}

export default Increment

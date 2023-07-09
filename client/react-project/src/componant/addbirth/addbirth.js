import React  from 'react';
import './addbirth.css';
import Axios from 'axios'
import { useState } from 'react';



const Addbirth = () => {


    
    const [date_of_calving, setdate_of_calving] = useState('');
    const dateOnChange = event =>{
            setdate_of_calving(event.target.value);

    }

    const [cow_number, setcow_number] = useState('');
    const cow_numberOnChange = event => {
        setcow_number(event.target.value.toString());
    }

    const birth = {
        cow_number: cow_number,
        date_of_calving: date_of_calving,
       
    }
    
    const addbirthfunction =  async()=>{
        if (birth.cow_number==="" || birth.date_of_calving===""){
        }else{
            await Axios.post('http://localhost:3001/addbirth',birth)
            .then(res => {console.log(res)})
            .catch(err => {})
            setdate_of_calving('')
            setcow_number('')
        }
       
        }
       
        
    
   
    return (
        <div className="container">
        <h2>Add New Birth</h2>
        <form >
            <div className="form-group">
                <label htmlFor="cow_number">Cow number :</label>
                <input type="number" id="cow_number" value={cow_number} name="cow_number" onChange={cow_numberOnChange} required />        
            </div>
            <div className="form-group">
                <label htmlFor='date_of_calving'>Date of calving:</label>
                <input type="date" id="date_of_calving" value={date_of_calving} name="date_of_calving" onChange={dateOnChange} required />
            </div>
            <input type="submit" className="submit btn btn-outline-success " onClick={addbirthfunction} value="Add birth" /> 

        </form>

        </div>  
    );
  }



export default Addbirth;

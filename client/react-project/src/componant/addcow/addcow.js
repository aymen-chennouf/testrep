import React  from 'react';
import './addcow.css';
import Axios from 'axios'
import { useState } from 'react';



const Addcow = () => {
    
    const [date_of_entry, setDate_of_entry] = useState('');
    const dateOnChange = event =>{
            setDate_of_entry(event.target.value);
    }
    const [breed, setbreed] = useState('');
    const breedOnChange = event => {
            setbreed(event.target.value);
    }
    const cow = {
            cow_number: "",
            date_of_entry: date_of_entry,
            breed: breed,
            births: [],
            medical_examinations: [],
       
    }
    
    const addcowfunction =  async()=>{
        if(breed === "" || date_of_entry=== ""){

        }else{
            await Axios.get('http://localhost:3001/lastindex').then(res =>{
            cow.cow_number = (parseInt(res.data)+1).toString()
        })
            Axios.post('http://localhost:3001/addcow',cow).then(res => console.log(res.data))
            setDate_of_entry('')
            setbreed('')
        }
       
        
    }
   
    return (
        <div className="container">
            <h2>Add New Cow</h2>
            <form >
                <div className="form-group">
                    <label htmlFor='date_of_entry'>Date of Entry:</label>
                    <input type="date" id="date_of_entry" value={date_of_entry} name="date_of_entry" onChange={dateOnChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="breed">Breed:</label>
                    <select id="breed" name="breed" value={breed}  onChange={breedOnChange} required>
                        <option value=""></option>
                        <option value="Holstein">Holstein</option>
                        <option value="Mastitis">Mastitis</option>
                    </select>
                </div>
                <input type="submit" className="submit btn btn-outline-success " onClick={addcowfunction} value="Add cow" /> 

            </form>
        </div>  
);

}

export default Addcow;

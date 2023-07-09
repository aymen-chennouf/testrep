import React from 'react'
import './cow card.css'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const Cowcard = ({cow_number , breed , date_of_entry , births ,onDelete})=>{
    
    const onDeletebutton = ()=>{
        onDelete() ;
        setShow(false);
    }
    const [show, setShow] = useState(false);
    return(
      <div class="card">
        <h3 class="cow-number">Cow Number: {cow_number}</h3>
        <p class="breed">Breed: {breed}</p>
        <p class="date-of-entry">Date of Entry: {date_of_entry}</p>
        <p class="date-of-entry">Births: {births}</p>
        <Alert show={show}  variant="danger">
              <Alert.Heading>Delete cow</Alert.Heading>
              <p>
                if you want to delete the cow press delete
              </p>
              <hr />
              <div className="d-flex justify-content-end">        
                <Button className='btn btn-outline-success alert_button' onClick={onDeletebutton} variant="outline-danger">
                  Delete
                </Button>              
                <Button className='btn btn-outline-success alert_button' onClick={() => setShow(false)} variant="outline-success">
                  Close 
                </Button>
              </div>
        </Alert>
        {!show &&   <button className="btn btn-outline-danger" type="button" onClick={() => setShow(true)}>Remove</button>
        }
      </div>
    )
    
}
export default Cowcard;
import React, { useEffect, useState } from 'react'
import './medicalexm.css'
import Axios from 'axios'
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';


const Medicalexm = ()=>{
  
  
  const [medicalexm, setmedicalexm] = useState([]);
  const getmedicalexm = ()=>{
    Axios.get("http://localhost:3001/medicalexm").then(res => {
     setmedicalexm(res.data);
    }).catch(err => {
    console.log(err);
    })
  }
  const [cow_number, setcow_number] = useState("");  
  const [disease, setdisease] = useState("");
  const [examination_day, setexamination_day] = useState("");
  const [search, setsearch] = useState("");
  const [searchedmedicalexm, setsearchedmedicalexm] = useState([]);
  useEffect(()=>{
    setsearchedmedicalexm(medicalexm);
  },[medicalexm])

  useEffect(()=>{
    getmedicalexm();
  },[])
  

  useEffect(()=>{
    if (search == "")  {
      setsearchedmedicalexm(medicalexm);
    }else{
      setsearchedmedicalexm(medicalexm.filter(medicalexm => medicalexm.cow_number == search));
    }
    
  },[search])

  useEffect(()=>{
    setsearchedmedicalexm(medicalexm);
  },[])

  const medical_examination ={
    cow_number : cow_number,
    examination_day : examination_day,
    disease : disease
  }

  const addmedicalexm =  async()=>{
    if (medical_examination.cow_number==="" || medical_examination.examination_day==="" || medical_examination.disease===""){
    }else{
      await Axios.post('http://localhost:3001/addmedicalexm',medical_examination)
      .then(res => {})
      .catch(err => {})
      setcow_number("")
      setdisease("")
      setexamination_day("")
      searchedmedicalexm.push(medical_examination)
    }
   
  }
   

 
    
  
  return (
    <>
    <div className='container'>
      <form className="d-flex">
        <input className="form-control me-2" type="number"  value={cow_number}  onChange={e=>{setcow_number(e.target.value)} } required/>
        <input className="form-control me-2" type="date"  value={examination_day}  onChange={e=>{setexamination_day(e.target.value)} } required/>
        <input className="form-control me-2" type="text"  value={disease} placeholder="Disease"   onChange={e=>{setdisease(e.target.value.toString())} } required/>
        <button className="btn btn-outline-success" type='submit' onClick={addmedicalexm}>add</button>
      </form>
    </div>
    <div className='container'>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" value={search} aria-label="Search" onChange={e=>{setsearch(e.target.value)} }/>
        <button className="btn btn-outline-success" type='button' onClick={()=>{}}>Search</button>
      </form>
      <Table striped bordered hover className='table'>
        <thead>
          <tr>
            <th>cow number</th>
            <th>date</th>
            <th>disease</th>
            </tr>
        </thead>
        <tbody>
          { searchedmedicalexm.map(medicalexm => {
            return (
              <tr>
                <td>{medicalexm.cow_number}</td>
                <td>{medicalexm.examination_day}</td>
                <td>{medicalexm.disease} </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    
    </div>
   </>
  )
}



export default Medicalexm
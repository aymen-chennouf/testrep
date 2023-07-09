import React, { useEffect, useState } from 'react'
import './allbirths.css'
import Cowcard from '../births card/birth card'
import Axios from 'axios'
import { Link } from "react-router-dom";

const Allbirths = ()=>{
  
  
  const [births, setbirths] = useState([]);
  const getBirths = ()=>{
    Axios.get("http://localhost:3001/allbirths",).then(res => {
     setbirths(res.data);
 }).catch(err => {
    console.log(err);
    })
  }

  const [search, setsearch] = useState("");
  const [searchedbirths, setsearchedbirths] = useState([]);
  useEffect(()=>{
    setsearchedbirths(births);
  },[births])

  useEffect(()=>{
    getBirths();
  },[])
  

  useEffect(()=>{
    if (search == "")  {
      setsearchedbirths(births);
    }else{
      setsearchedbirths(births.filter(birth => birth.cow_number == search));
    }
    
  },[search])

  useEffect(()=>{
    setsearchedbirths(births);
  },[])


 
    
  
  return (
    <>
      <div className='container'>
      <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" value={search} aria-label="Search" onChange={e=>{setsearch(e.target.value)} }/>
          <button className="btn btn-outline-success" type='button' onClick={()=>{}}>Search</button>
      </form>
      { searchedbirths.map(birth => {
        return (
          <>
            <Cowcard cow_number={birth.cow_number} date_of_calving={birth.date_of_calving} />
          </>
        )
      })}
      <Link  to='/addbirth'> 
        <button className="bottom-right-button btn btn-outline-success"   >Add new birth</button>
      </Link>
      </div>
    </>
  )
}



export default Allbirths
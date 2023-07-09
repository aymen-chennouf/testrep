import React, { useEffect, useState } from 'react'
import './allcows.css'
import Cowcard from '../cow card/cow card'
import Axios from 'axios'
import { Link } from "react-router-dom";








const Allcows = ()=>{
  
  
  const [cows, setcows] = useState([]);
  const getCows = ()=>{
    Axios.get("http://localhost:3001/allcows",).then(res => {
     setcows(res.data);
 }).catch(err => {
    console.log(err);
    })
  }

  const [search, setsearch] = useState("");
  const [searchedcows, setsearchedcows] = useState([]);
  useEffect(()=>{
    setsearchedcows(cows);
  },[cows])

  useEffect(()=>{
    getCows();
  },[])

  useEffect(()=>{
    if (search == "")  {
      setsearchedcows(cows);
    }else{
      setsearchedcows(cows.filter(cow => cow.cow_number == search));
    }
    
  },[search])

  useEffect(()=>{
    setsearchedcows(cows); 
  },[cows])


  const deletecow = (cow_number)=>{
    Axios.delete('http://localhost:3001/deletecow',{data : {"cow_number" : cow_number}})
    .then(res=>{
    })
    setcows(cows.filter(cow => cow.cow_number!== cow_number));
    setsearch("")
  }


  return (
    <>    
      <div className='container'>
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" value={search} aria-label="Search" onChange={e=>{setsearch(e.target.value)} }/>
            <button className="btn btn-outline-success" type='button' onClick={()=>{}}>Search</button>
        </form>
        { searchedcows.map(cow => {
          return (
            <>
              <Cowcard cow_number={cow.cow_number} breed={cow.breed} date_of_entry={cow.date_of_entry} births={cow.births.length} onDelete={()=>deletecow(cow.cow_number)}/>
            </>
          )
        })}
        <Link  to='/addcow'> 
          <button className="bottom-right-button btn btn-outline-success"   >Add new cow</button>
        </Link>
      </div>
    </>
  )
}

export default Allcows

import './milkprod.css'
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react'
import Axios from 'axios'



const Milkprod = ()=>{
    const [milk, setmilk] = useState([]);
    const getMilk = ()=>{
        Axios.get("http://localhost:3001/milk",)
        .then(res => {
            setmilk(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
    const [search, setsearch] = useState("");
    const [searchedmilk, setsearchedmilk] = useState([]);
    useEffect(()=>{
        getMilk();
        
    },[])
    useEffect(()=>{
        if (search == "")  {
        setsearchedmilk(milk);
        }else{
        setsearchedmilk(milk.filter(milk => milk.date == search));
        }
        
    },[search])
     useEffect(()=>{
        setsearchedmilk(milk);
    },[milk])
    const [date,setdate] = useState("")
    const [amount_of_milk,setamount_of_milk] = useState("")
    const daily_milk_production ={
        date: date,
        amount_of_milk : amount_of_milk
    }
    const addmilkfunction =  ()=>{
        if(date === "" || amount_of_milk === ""){
        }else{
            Axios.post('http://localhost:3001/addmilk',daily_milk_production).then(res => {})
            setdate('')
            setamount_of_milk('')
            searchedmilk.push(daily_milk_production)
        }
      
    }
   

        
    return(
        <>
            <div className='container'>
                <form className="d-flex">
                    <input className="form-control me-2" type="date"  value={date}  onChange={e=>{setdate(e.target.value)} } required/>
                    <input className="form-control me-2" type="number"  value={amount_of_milk} placeholder="Amount of milk"   onChange={e=>{setamount_of_milk(e.target.value.toString())} } required/>
                    <button className="btn btn-outline-success" type='submit' onClick={addmilkfunction}>add</button>
                </form>
            </div>
            <div className='container'>
                <form className="d-flex">
                    <input className="form-control me-2" type="date" placeholder="Search" value={search} aria-label="Search" onChange={e=>{setsearch(e.target.value)} }/>
                    <button className="btn btn-outline-success" type='button' onClick={()=>{}}>Search</button>
                </form>
                <Table striped bordered hover className='table'>
                    <thead>
                        <tr>
                        <th>date</th>
                        <th>amount of milk</th>
                        </tr>
                    </thead>
                    <tbody>
                        { searchedmilk.map(milkd => {
                            return (
                                <tr> 
                                    <td>{milkd.date}</td>
                                    <td>{milkd.amount_of_milk} litre</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>   
            </div>
        </>
    )
    
}
export default Milkprod;
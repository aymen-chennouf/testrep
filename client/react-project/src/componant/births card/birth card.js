import React from 'react'
import './births card.css'

const Birthcard = ({cow_number , date_of_calving })=>{
    
    
    
  return(
    <div class="card">
      <h3 class="cow-number">Cow Number: {cow_number}</h3>
      <p class="date_of_calving">Date of calving: {date_of_calving}</p>
    </div>
  )
    
}
export default Birthcard;
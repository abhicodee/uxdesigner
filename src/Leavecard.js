import React from 'react'
import "./Leavecard.css";
const Leavecard = (props) => {
   
  return (
    
       <div style={{backgroundColor:props.card.backgroundcolor}} className='leavecard'>
       
        <p id="leaveheader">{props.card.text}</p>
        <span><h5 id="no2">{props.card.no}
        </h5>
        <p id="left">Left</p></span>
        <div className='status'>
            <p>Current year</p>
            <p className='no3'>00</p>
         <p>Availed</p>
            <p className='no3'>00</p>

            <hr/>
            <p>Balance </p>
            <p className='no3'>00</p>
        </div>
       </div>
   
  )
}

export default Leavecard;

import React from "react";
import "./Holiday.css";
 
const Holiday = (props) => {
  return (
    <div  className="holiday-style">
      <p id="holiday">{props.page.text}</p>
      <img style={{width:"100%"}} src={props.page.image} alt="hello"></img>
    </div>
  );
};

export default Holiday;

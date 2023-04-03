import React from "react";
import "./card.css";
export default function Card(props) {
  return (
    <>
      <div style={{backgroundColor:props.state.backgroundcolor}} className="card">
      <p id="no">{props.state.no}</p>
      <div className="text">
        <span >{props.state.text}</span>
        </div>
        <i
          id="cal-style"
          className={props.state.icon}
          style={{
            color: props.state.style,
            borderColor: props.state.bordercolor,
          }}
        ></i>
      </div>
    </>
  );
}

import React from "react";
import "./Attendence.css";
import Card from "./card";
import Leave from "./Leave";
export const Attendance = () => {
  return (
    <>
      <div >
        <div className="head-style">
          <span>My Attendance</span>
          <span id="DOB">March(31days)</span>
          <img
            id="rightarrow"
            src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-right-arrow-user-interface-kmg-design-flat-kmg-design.png"
          />
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                <Card
                 state={{backgroundcolor:"rgb(117 168 255 / 32%)", bordercolor:"#75a8ff", style:"#75a8ff",text:"Total days in dec",no:"20",icon:"fa-solid fa-calendar",background:"#75a8ff"}}></Card>
              </td>
              <td>
                <Card state={{backgroundcolor:"rgb(33 128 0 / 36%)", bordercolor:"#218000c7", style:"#008000a8", color:"green",text:"Payable Days in Dec",no:"20",icon:"fa-solid fa-indian-rupee-sign"}}></Card>
              </td>
              <td>
                <Card state={{backgroundcolor:"rgb(33 128 0 / 36%)", bordercolor:"green"
, style:"#11df14",text:"Present",no:"20",icon:"fa-solid fa-square-check"}}></Card>
              </td>
            </tr>
            <tr>
              <td>
                <Card state={{backgroundcolor:"rgb(240 15 15 / 30%)", bordercolor:"#f00f0f",style:"#f00f0f",text:"On Duty",no:"20",icon:"fa-solid fa-bag-shopping"}}></Card>
              </td>
              <td>
                <Card state={{ backgroundcolor:"rgb(148 165 194 / 23%)", bordercolor:"#94a5c2",style:"#94a5c2",text:"Week Off",no:"20",icon:"fa-solid fa-calendar"}}></Card>
              </td>
              <td>
                <Card state={{ backgroundcolor:"rgb(254 200 6 / 27%)", bordercolor:"#fec806",style:"#fec806",text:"Holiday",no:"20",icon:"fa-solid fa-tree"}}></Card>
              </td>
            </tr>
            <tr>
              <td>
                <Card state={{  backgroundcolor:"rgb(240 15 15 / 30%)", bordercolor:"#ff000033",style:"#e11f09",text:"Leave",no:"20",icon:"fa-solid fa-exclamation"}}></Card>
              </td>
              <td>
                <Card state={{ backgroundcolor:"#f66fb933", bordercolor:"pink",style:" #f416f8",text:"Leave Without pay",no:"20",icon:"fa-solid fa-chair"}}></Card>
              </td>
              <td>
                <Card  state={{backgroundcolor:"rgb(240 15 15 / 25%)", bordercolor:"#ff000033",style:"#f00f0f",text:"Absent",no:"20",icon:"fa-solid fa-circle-xmark"}}></Card>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Leave></Leave>
    </>
   
  );
};

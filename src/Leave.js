import React from "react";
import Leavecard from "./Leavecard";
import Footer from "./Footer";
import Holiday from "./Holiday.js";
import img2 from "./image/img2.png";
import abcd from "./image/abcd.png";
import "./Leave.css";
const Leave = () => {
  return (
    <>
      <div className="myleave">
        <p id="upper">My Leave</p>
        <img
          id="arrow"
          src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-right-arrow-user-interface-kmg-design-flat-kmg-design.png"
        />
        <table>
          <tr>
            <td>
              <Leavecard
                card={{ text: "Earned Leave", no: "12", color: "white",backgroundcolor:"#ffd30085" }}
              ></Leavecard>
            </td>

            <td>
              {" "}
              <Leavecard
                card={{ text: "Casual Leave", no: "12", color: "white",backgroundcolor:"#0000ff61" }}
              ></Leavecard>
              <td />
            </td>
          </tr>
        </table>
      </div>
      <br />
      <figure>
        <Holiday page={{ text: "My Holiday", image: abcd }}></Holiday>
        <figcaption>Img1</figcaption>
      </figure>
      <figure>
        <Holiday page={{ text: "My Task", image: img2 }}></Holiday>
        <figcaption>Img1</figcaption>
      </figure>

      {/* <table>
        <tr>
       <td>  
            
       /></td>
         </tr>
         <td> <Holiday page={{text:"My Task",image:img2}} /></td>
          </table> */}
      <Footer />
    </>
  );
};

export default Leave;

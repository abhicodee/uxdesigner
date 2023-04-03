import React from 'react';
import {Attendance} from './Attendance';
// import Attendance from "./Attendance";
import  "./index.css";
const App=()=>{
     return(
      <>
        <div className="nav-bar">
        <i class="fa-solid fa-arrow-left fa-beat-fade"></i>
        <h1>My Space</h1>
        <div className='search'>
        <i class="fa-solid fa-magnifying-glass fa-beat"></i>
    
        <i class="fa-solid fa-bell fa-shake notify bell" ></i> 
        </div>
        <div className='header'>
      
        
       <img  className="pic-style"src=" https://static.vecteezy.com/system/resources/thumbnails/004/899/833/small/beautiful-girl-with-blue-hair-avatar-of-woman-for-social-network-vector.jpg"></img>
  
        <div className='content'>
        <h4>Ananya Singh</h4>
          <p>UX Designer</p>
          <p>127927</p>
          <i class="fa-sharp fa-regular fa-eye fa-beat eyestyle" style={{color: "#fea120",position:"relative",top:"-142px",left:"60px"}}></i>
        </div>
       </div>
        </div>
        <Attendance ></Attendance>
      </>
     );
}
export default App;
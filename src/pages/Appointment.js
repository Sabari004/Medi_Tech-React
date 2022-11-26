import React from "react";

import TextField from '@mui/material/TextField';
import '../Styles/appointment.css'
import img from '../assets/app.webp'
import Select from "../Components/Select";
import Button from '@mui/material/Button';
export default function Appointment(){
    
    return(
        <>
        
        <div id="output">
            <div className="output-imag">
                <img src={img}></img>
            </div>
            <div className="output-div">
                <h1>Book an Appointment</h1>
                <TextField id="outlined-basic" label="Name" variant="outlined" required/>
                <TextField id="outlined-basic" type="number" label="Phone no" variant="outlined" required/><br/>
                <div className="output-select">
                <Select ></Select>
                </div>
                <TextField id="outlined-basic" type="date" variant="outlined" />
                <TextField id="outlined-basic" type="time"  variant="outlined" /><br/>
                
            <TextField  style={{marginTop:10}} id="outlined-basic" label="Symptoms" multiline rows={4} /><br></br>
      <Button variant="contained" style={{marginTop:10}} onClick={()=>{alert("Successfully Booked the Appointment")}} >Book</Button>

            </div>
        
        </div>
        
        </>
    )
}
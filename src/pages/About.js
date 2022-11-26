
import React from "react";
import Cardss from "../Components/Cards";
import Footer from "../Components/Footer";
import '../Styles/about.css'
export default function About(){ 
    return(
        <>
        <div id="card">
     
            <div><Cardss id="card1" name="Apollo"/></div>
            <div><Cardss id="card1" name="Frontie"/></div>
            <div><Cardss id="card1" name="Vijaya"/></div>
            <div><Cardss id="card1" name="Mehta"/></div>
            <div><Cardss id="card1" name="Ramachandra"/></div>
            <div><Cardss id="card1" name="St. Isabel"/></div>
            <div><Cardss id="card1" name="Hindu"/></div>
            <div><Cardss id="card1" name="KMCH"/></div>
            
        </div>
        <Footer/>
        </>
    )
}
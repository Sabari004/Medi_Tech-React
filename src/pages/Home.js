import React from "react";
import "../Styles/Home.css"
import img from '../assets/med.png'
export default function Home(props) {
    return (
        <>
            <div id="output">

                <div className="t1">
                    <h1>Welcome to MediTech..</h1>
                    <p>This sites include sites that have a large variety of information which may not be considered "news" by all audiences, but may include entertainment, games, news</p>
                    <button onClick="">▶ Get started</button>
                </div>
                <div className="c1" order>
                    <img src={img} alt="med"></img>
                </div>

            </div>
        </>
    )
}
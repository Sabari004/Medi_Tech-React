import React from 'react'
import '../Styles/bar.css'
function Bar(props) {
    return ( 
        <>
            
            <div id='bar'>
                <p id="no">{props.id}</p>
                <p id="date">{props.date}</p> 
                <p id="name">{props.name}</p>
                <p id="dis">{props.dis}</p>
            </div>
        </>
     );
}

export default Bar;
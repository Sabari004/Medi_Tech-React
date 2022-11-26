import React, { Component } from 'react'
import Bar from '../Components/Bar';
import Footer from '../Components/Footer';
import '../Styles/bar.css'
class Services extends Component {
    state = { list:[
        {id:1,doctor:"Dr.Sanjeevi",date:"15-02-2003",dis:"cold"},
        {id:2,doctor:"Dr.Sai",date:"30-02-2004",dis:"cough"},
        {id:3,doctor:"Dr.Sachin",date:"29-02-2005", dis:"fever"},
        {id:4,doctor:"Dr.Kamal",date:"15-02-2006", dis:"dengue"},
        {id:5,doctor:"Dr.sathyan",date:"05-02-2007", dis:"malaria"},
        {id:6,doctor:"Dr.Vinoth",date:"15-02-2008", dis:"Typhoid"},
        {id:7,doctor:"Dr.Vignesh",date:"07-02-2009", dis:"jaundise"},
        {id:8,doctor:"Dr.Yesh",date:"21-02-20010", dis:"fever"},
        {id:9,doctor:"Dr.Sriram",date:"32-02-2011", dis:"head Ache"},
        {id:10,doctor:"Dr.Sachin",date:"03-02-2021", dis:"sick"}
    ] } 
    render() { 
        return (
            <>
            
                <div className='output'>
                

                        {this.state.list.map(san=><Bar id={san.id} dis={san.dis} name={san.doctor} date={san.date}></Bar>)}

                </div>
                <Footer/>
            </>
        );
    }
}
 
export default Services;
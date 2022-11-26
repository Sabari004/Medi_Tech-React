import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
export default function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <h1 className="navbar-brand">MediTech</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ">
          <Link className="nav-link" to="/">Home</Link>
         <Link className="nav-link" to="/services">Services</Link>
         <Link className="nav-link" to="/about">About</Link>
         <Link className="nav-link" to="/appointment">Appointment</Link>
        </div>
      </div>
    </div>
  </nav>
  )
}
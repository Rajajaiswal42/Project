import React from 'react'
import {NavLink}from "react-router-dom"

const navigation = () => {
  return (
    <div>
        
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
      <div className="container-fluid"  >
        <NavLink to="/" className="navbar-brand" >Books</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/Addbooks" className="nav-link active mx-5 fw-bold" aria-current="page" href="#">Add Books</NavLink>
            </li>
            <li className="nav-item">
              <NavLink  to="/AddByCSV" className="nav-link fw-bold" >Add books via CSV</NavLink>
            </li>
     
          </ul>
     
        </div>
      </div>
    </nav>
    </div>
  )
}

export default navigation
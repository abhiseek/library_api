import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate()
  const[w,setW]=useState('')

  function input(event){
    setW(event.target.value)//assign target value to w
  }

  function search(){
    if(w){
      navigate(`/search?w=${w}`)
      console.log(w)
    }
    
    
  }
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container d-flex justify-content-center">
    <Link to ={""}>
    <a class="navbar-brand" href="#">Library</a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
          <Link to={""}>
          <a class="nav-link active" aria-current="page" href="#">Home</a></Link>
        </li>
        <li class="nav-item">
          <Link to={"view"}>
          <a class="nav-link" href="#">View</a></Link>
        </li> <li class="nav-item">
          <Link to={"add"}>
          <a class="nav-link" href="#">Add</a></Link>
        </li>
        <li class="nav-item">
          <Link to={"Register"}>
          <a class="nav-link" href="#">Register</a></Link>
        </li>
        <li class="nav-item">
          <Link to={"Login"}>
          <a class="nav-link" href="#">Login</a></Link>
        </li>
      </ul>
     
        <input class="form-control me-2" type="search" onChange={input} placeholder="Search" aria-label="Search"></input>
        {/* <Link to={"Search"}> */}
        <button class="btn btn-outline-success" onClick={()=>search()} type="submit">Search</button>
        {/* </Link> */}
        
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar 
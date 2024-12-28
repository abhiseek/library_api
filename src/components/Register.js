import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../services/Apicalls'
function Register() {
  const [user,setUser]=useState({'username':'','password':'','email':'','first_name':'','last_name':''})
  const navigate=useNavigate()
  async function submit(event){
    // console.log(user)S
    event.preventDefault()
    let res=await register(user)
    console.log(res)
    navigate('/')
  }
  return (
    <div className="container d-flex justify-content-center align-items-center ">
    <div className="w-50">
    <h2 className="text-center mb-4">register</h2> 
    <form onSubmit={submit}>
      
            <div class="form-group">
                <label >username</label>
                <input type="text" class="form-control" onChange={(event)=>setUser({...user,username:(event.target.value)})}></input>
            </div>
            <div class="form-group">
                <label >password</label>
                <input type="password" class="form-control" onChange={(event)=>setUser({...user,password:(event.target.value)})}></input>
            </div>
            <div class="form-group">
                <label >Email </label>
                <input type="text" class="form-control" onChange={(event)=>setUser({...user,email:(event.target.value)})}></input>
            </div>
            <div class="form-group">
                <label >first name</label>
                <input type="text" class="form-control" onChange={(event)=>setUser({...user,first_name:(event.target.value)})}></input>
            </div>
            <div class="form-group">
                <label >last name</label>
                <input type="text" class="form-control" onChange={(event)=>setUser({...user,last_name:(event.target.value)})}></input>
            </div>
            <div class="text-center mt-3 ">
                <button type="submit" class="btn btn-primary">register</button>
            </div>
    </form>
    </div></div>
  )
}

export default Register
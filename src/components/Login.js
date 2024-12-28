import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/Apicalls'

function Login() {
  const [user,setUser]=useState({'username':'','password':'',})
  const navigate=useNavigate()
  async function submit(event){
    
    event.preventDefault()
    console.log(user)
    let res=await login(user)
   console.log(res.data)
    let token=res.data['token']
    localStorage.setItem('token',"token "+token)
    console.log(token)
    console.log(localStorage.getItem('token'))
    navigate('/')
  }

  return (
    <div className="container d-flex justify-content-center align-items-center ">
    <div className="w-50">
    <h2 className="text-center mb-4">login</h2> 
    <form onSubmit={submit}>
      
            <div class="form-group">
                <label >username</label>
                <input type="text" class="form-control" onChange={(event)=>setUser({...user,username:(event.target.value)})}></input>
            </div>
            <div class="form-group">
                <label >password</label>
                <input type="password" class="form-control" onChange={(event)=>setUser({...user,password:(event.target.value)})}></input>
            </div>
            
            <div class="text-center mt-3 ">
                <button type="submit" class="btn btn-primary">login</button>
            </div>
    </form>
    </div></div>
  )
}

export default Login
import React,{ useState } from 'react'
import { postbook } from '../services/Apicalls';
import { useNavigate } from 'react-router-dom';


function Add() {

  const navigate=useNavigate()
   const [books,setBooks]=useState({title:'',author:'',price:'',pages:'',language:'',image:null});

  
   async function submit(event){
    event.preventDefault() //prevent default behavior of reloading the component
    let res=await postbook(books)
    console.log(res);
    navigate('/view')

   }

  //  async function submit(event) {
  //     event.preventDefault(); // Prevent default behavior of form submission (page reload)
    
      
  //     const formData = new FormData();
      
  //     // Append fields to FormData
  //     formData.append('title', books.title);
  //     formData.append('author', books.author);
  //     formData.append('price', books.price);
  //     formData.append('pages', books.pages);
  //     formData.append('language', books.language);
      
  //     // Append image if present
  //     if (books.image) {
  //        formData.append('image', books.image);
  //     }

  //     try {
  //        // Post data using the postbook function
  //        const res = await postbook(formData);
  //        console.log(res); 
  //        navigate('/view')
  //     } catch (error) {
  //        console.error('Error adding book:', error); // Handle error
  //     }
  //  }
  return (
    <div className="container d-flex justify-content-center align-items-center ">
    <div className="w-50">
        <h2 className="text-center mb-4">Add New Book</h2> 
    <form onSubmit={submit}>
      
            <div class="form-group">
                <label >title</label>
                <input type="text" class="form-control" onChange={(event)=>setBooks({...books,title:(event.target.value)})}></input>
            </div>
            <div class="form-group">
                <label >Author</label>
                <input type="text" class="form-control" onChange={(event)=>setBooks({...books,author:(event.target.value)})}></input>
            </div>
            <div class="form-group">
                <label >price </label>
                <input type="number" class="form-control" onChange={(event)=>setBooks({...books,price:(+event.target.value)})}></input>
            </div>
            <div class="form-group">
                <label >pages</label>
                <input type="number" class="form-control" onChange={(event)=>setBooks({...books,pages:(+event.target.value)})}></input>
            </div>
            <div class="form-group">
                <label >language</label>
                <input type="text" class="form-control" onChange={(event)=>setBooks({...books,language:(event.target.value)})}></input>
            </div>
            <div class="form-group">
                <label >Image</label>
                <input type="file" class="form-control" onChange={(event)=>setBooks({...books,image:(event.target.files[0])})}></input>
            </div>
            <div class="text-center mt-3 ">
                <button type="submit" class="btn btn-primary">add book</button>
            </div>
    </form>
    </div></div>
  )
}

export default Add
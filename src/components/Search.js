import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { searchbook } from '../services/Apicalls'

function Search() {
  const {search}=useLocation()
   const [books,setBooks]=useState([]);
  const queryParams=new URLSearchParams(search) 
  const w=queryParams.get('w')
    // console.log(w)

    async function searchbooks(){
      let res=await searchbook(w)
      // console.log(w)
      // console.log(res)
      let d=res.data;
    setBooks(d);
    console.log(books)
    }
    useEffect(()=>{searchbooks()},[w])
  return (
    <div>
      <h3 class="text-center">search books
      </h3>
      <div>
      {Array.isArray(books) ?<div><h2>found Book for <span class="text-info">"{w}"</span></h2>
      <table border="1" class="table table-bordered">
        <thead>
          <tr>
            
            <th>Title</th>
            <th>Author</th>
            <th>Pages</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((book) => (
             <tr>
                
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.pages}</td>
                <td>{book.price}</td>
                
              </tr>
            ))
           }
        </tbody>
      </table></div> : <h2 class="text-secondary">no results found</h2>}
    </div>
    </div>
  )
}

export default Search
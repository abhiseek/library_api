import React, { useState } from 'react';
import { useEffect } from 'react'
import { deletebook, getallbooks } from '../services/Apicalls'
import { useNavigate } from 'react-router-dom';
function View() {
  const navigate=useNavigate()
  const [books,setBooks]=useState([]);
  
  async function fetchbooks(){
    let res=await getallbooks();
    console.log(res);
    let d=res.data;
    setBooks(d);
    console.log(books)
  }
  function detail(i){
    // console.log(i)
    navigate(`/detail/?id=${i}`)
  }
  async function bookdelete(i){
    let res=await deletebook(i)
    console.log(res)
    if(res.status>199 && res.status<399){
      fetchbooks()
    }
    else {
      alert("can't delete the record ,try again")
  }}

  function edit(i){
    console.log(i)
    navigate(`/edit/?id=${i}`)
  }

  //useEffect()-->(function,depencies) --hook
  useEffect(()=>{fetchbooks()},[]) //it will call function fectbook() when a component is loaded
  return (
    <div>
      <h2>Book Details</h2>
      <table border="1" class="table table-bordered">
        <thead>
          <tr>
            
            <th>Title</th>
            <th>Author</th>
            <th>Pages</th>
            <th>Price</th>
            <th>Cover</th>
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
                <td>
                  {book.image ? (
                    <img src={book.image} style={{ width: '100px' }} />
                  ) : (
                    'No image available'
                  )}
                </td>
                <td><button onClick={()=>detail(book.id)}>VIEW</button><button onClick={()=>edit(book.id)}>EDIT</button><button onClick={()=>bookdelete(book.id)}>DELETE</button></td>
              </tr>
            ))
           }
        </tbody>
      </table>
    </div>
  )
}

export default View
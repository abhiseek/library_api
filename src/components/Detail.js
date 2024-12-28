import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getbookdetail } from '../services/Apicalls'


function Detail() {
    const [book,setBook]=useState({})
    const {search}=useLocation() //uselocation hook is used to get the value from a url path
    // console.log(location)
    const queryParams=new URLSearchParams(search)
    // console.log(queryParams)
    const id = queryParams.get('id')//fetch id from param
    console.log(id)
    async function bookdetail(){
            let res=await getbookdetail(id)
            console.log(res.data);
            let d=res.data;
            setBook(d)
            console.log(book)
    }
    useEffect(()=>{bookdetail()},[])
  return (
    <div className="book-detail-container">
    {
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th colSpan="2">
                        <h1>{book.title}</h1>
                        <h3>by {book.author}</h3>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Image</th>
                    <td>
                        {book.image ? (
                            <img src={book.image} alt={book.title} style={{ maxWidth: '200px' }} />
                        ) : (
                            <p>No image available</p>
                        )}
                    </td>
                </tr>
                
                <tr>
                    <th>Pages</th>
                    <td>{book.pages}</td>
                </tr>
                <tr>
                    <th>Price</th>
                    <td>{book.price}</td>
                </tr>
            </tbody>
        </table>
    }
</div>

  )
}

export default Detail
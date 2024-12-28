import axios from 'axios';

 export async function getallbooks()
 {
   const t=localStorage.getItem('token')
   let h={'Authorization':t}
   console.log(t)
       return await axios.get('http://127.0.0.1:8000/book/',{ headers: h })
 }
 export async function postbook(data) {
   let h = { 'Content-type': 'multipart/form-data'};
   return await axios.post("http://127.0.0.1:8000/book/", data, { headers: h });
}

 export async function getbookdetail(id)
 {
    return await axios.get(`http://127.0.0.1:8000/book/${id}/`)
 }
 export async function editbook(id,data)
 {
   let j = { 'Content-type': 'multipart/form-data'};
    return await axios.put(`http://127.0.0.1:8000/book/${id}/`,data, { headers: j })
 }
 export async function deletebook(id)
 {
 
    return await axios.delete(`http://127.0.0.1:8000/book/${id}/`)
 }

 export async function register(data)
 {
    return await axios.post("http://127.0.0.1:8000/users/",data)
 }
 export async function login(data)
 {
    return await axios.post("http://127.0.0.1:8000/login/",data)
 }

export async function searchbook(w) 
{
   let p={'search':w}
   return await axios.get(`http://127.0.0.1:8000/search/`,{params:p})
}

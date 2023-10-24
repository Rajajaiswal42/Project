import React, { useState } from "react";
import "./App.css"
import axios from "axios";

function App() {
  const [books,setbooks]=useState([])
  const download=(e)=>{
  
    const csv = books.map(row => Object.values(row).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.csv';
    a.click();
    URL.revokeObjectURL(url);
  }
  const allBooks=async()=>{
 try{
  const data =await axios.get(`http://localhost:8080/Getallbooks`)
  setbooks(data.data)
 }catch(err){
  console.log(err)
 }
  }

  useState(()=>{
    allBooks()
  },[])
  return (
    
    <div className="container">
      <button  className="btn btn-danger"onClick={(e)=>download()}>download all books in CSV</button>
      <h1 className="fw-bold text-center">ALL BOOKS</h1>
     
      <div className="row">
        
        {books.length >0? books.map(p=>{
          return(
            <div className="col-lg-3 col-md-6 col-sm-12 my-2">
            <div className="card" style={{width:"15rem"}}>
              <div className="photo-wrapper">
              <img src={p.ImageUrl} className="card-img-top" alt="..."/>
              </div>
         
                <div className="card-body">
                  <h5 className="card-title fw-bold text-center">{p.Title}</h5>
                  <p className="card-text fw-bold text-center">{p.Author}</p>
                  
                </div>
            </div>
          </div>
          )
        }):<h2>YOU HAVE NO BOOKS RIGHT NOW ,PLZ ADD THROUGH ABOVE LINK</h2>}
      
      </div>
    </div>

  );
}

export default App;

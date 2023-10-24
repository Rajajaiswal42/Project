import React, { useState } from 'react';
import Papa from "papaparse"
import axios from 'axios';


const AddBooksbyCSV=()=> {
  const [csvFile, setCsvFile] = useState(null);
  const [alldata, setalldata] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setCsvFile(file);
  };
  const  createBooks=async(Title,Author,ImageUrl)=>{
    try{
      
      const  data=await axios.post(`http://localhost:8080/CreateBook`,{
        Title:Title,
        Author:Author,
        ImageUrl:ImageUrl
    
      })
      if(data.status===201){
        alert("BOOK IS ADDED SUCCESSFULLY")
      
      }
    }catch(Err){
        console.log(Err)
    }
 }

  const handleUpload = async() => {
  
      const data = await Papa.parse(csvFile, {
        complete: function(results) {
          console.log(results.data);
          setalldata(results.data)
        },
        header:true
      });
     alldata.map(p=>{
       createBooks(p.Title,p.Author,p.ImageUrl).then(()=>{
        console.log("books is addded")
       }).catch(err=>console.log(err))

     })
  
  
   
    }
    console.log(alldata)

  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-6 mx-auto'>
          <h2 className='fw-bold text-center'>Select your Csv file</h2>
          <h6 className='fw-bold text-center'>plz give a valid ,Title,Author,ImageUrl in your csv file</h6>

        <input className='form-control' type="file" accept=".csv" onChange={handleFileChange} />
      <button className='btn btn-success' onClick={handleUpload}>Upload</button>
        </div>

      </div>
     
    </div>
  );
}

export default  AddBooksbyCSV;

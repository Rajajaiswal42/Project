import React, { useState } from 'react'
import axios from"axios"

const Add_Books = () => {
 const  [title,setTitle]=useState("")
 const  [Author,setAuthor]=useState("")
 const  [Image,setImage]=useState({preview:"",data:""})

 const  handleFile=(event)=>{
    setImage(event.target.files[0])
 }

 const  imageUpload=async()=>{
    try{
        const formdata=new FormData()
       formdata.append("file",Image)

        const file=await axios.post(`http://localhost:8080/uploadImage`,formdata)
       // console.log(file)
        return file

    }catch(err){
        console.log(err)
    }
 }

 const  createBooks=async(e)=>{
    try{
        e.preventDefault()
      
        const image=await imageUpload()
        console.log(Image)

      const  data=await axios.post(`http://localhost:8080/CreateBook`,{
        Title:title,
        Author:Author,
        ImageUrl:`http://localhost:8080/files/${image.data.filename}`||" "
    
      })
      if(data.status===201){
        alert("BOOK IS ADDED SUCCESSFULLY")
        setImage("")
        setAuthor("")
        setTitle("")
      }
    }catch(Err){
        console.log(Err)
    }
 }


    return (
        <div className='container'>
            <div className='row my-3'>
                <h1 className='fw-bold text-center'>ADD BOOK</h1>
                <div className='col-6 mx-auto'>
                    <form onSubmit={(e)=>createBooks(e)}>
                        <input type="text" class="form-control mb-3" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" />
                        <input type="text" class="form-control mb-3" value={Author} onChange={(e)=>setAuthor(e.target.value)} placeholder="Author" />
                        <input type="file" class="form-control mb-3"accept="image/*" onChange={(e)=>handleFile(e)} placeholder="Image" />
                        <button className='btn btn-success w-50'  type='submit'>ADD</button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Add_Books

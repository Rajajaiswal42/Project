const express =require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")
const  BooksRouter=require('./router/router')
app.use(cors())
app.use(express.json())
app.use(BooksRouter)
global.__basedir = __dirname;




mongoose.connect("mongodb://0.0.0.0:27017/Books")
.then(data=>{
    console.log("database connected")
    app.listen(8080)
})
.catch(err=>{
    console.log(err)
})
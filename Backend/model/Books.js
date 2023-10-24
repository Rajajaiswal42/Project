const mongoose=require("mongoose")
const  booksschema=new mongoose.Schema({
Title:{
    type:String,
    required:true
},
Author:{
    type:String,
    required:true
},
ImageUrl:{
    type:String
}

})
module.exports=mongoose.model("Books",booksschema)
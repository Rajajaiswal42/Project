const router=require("express").Router()
const multer=require("multer")
const path=require("path")
const BooksModel=require("../model/Books")

const diskStorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"upload/")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload=multer({
    storage:diskStorage,
    fileFilter:(req,file,cb)=>{
        if(file.mimetype==="image/png" || file.mimetype==="image/jpg" ||file.mimetype==="image/jpeg" ){
            cb(null,true)
        }else{
            cb(null,false);
            cb(new Error("fileType is not valid"))
        }
     
    }
})
router.post("/uploadImage",upload.single("file") , function(req,res,next){
    console.log(req.file)
    res.json({"filename":req.file.filename})
})
router.get('/files/:filename', (req, res) => {

    const filename=req.params.filename
    
    const  filePath= path.join(`${global.__basedir}/upload/${filename}`)

    res.download(filePath, (err) => {
      if (err) {
      
        res.status(404).send('File not found');
      }
    });
  });


router.post("/CreateBook",async(req,res,next)=>{
try{
    const {Title,Author,ImageUrl}=req.body
    if(!Title || !Author){
     return res.status(502).json({Msg:"one or Mandatory field is Empty"})
    }
    const  Books=new BooksModel({
     Title:Title,
     Author:Author,
     ImageUrl:ImageUrl
    })
    const Book =await Books.save()
    return res.status(201).json({Msg:"Book is Added",Book})
 
}
catch(err){
    console.log(err)
}
})

router.get("/Getallbooks",async(req,res,next)=>{
    try{
       const ALLBooks=await BooksModel.find({})
       if(!ALLBooks){
        return res.status(404).json({Msg:"NO books Found"})
       }
       return res.status(200).json(ALLBooks)
    }catch(err){
        console.log(err)
    }
})
module.exports=router
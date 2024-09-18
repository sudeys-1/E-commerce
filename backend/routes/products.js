const express = require("express")
const Products  = express.Router()
const Productschema=require("../model/productSchema")
const multer = require("multer")


// Multer
const imageLocation = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "image");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
})

const uploadimage =multer({
    storage:imageLocation
})

// API that create a new Product

Products.post("/Create", uploadimage.single("image"), async (req, res) =>{
    
    const NewProduct = Productschema({
        image: req.file.filename,
        title: req.body.title,
        price: req.body.price,
 
    })
    const SaveProduct = await NewProduct.save()
    if (SaveProduct){
        res.send("Saved seccssefully ")
    }
})

// Route for the Images
Products.use("/images",express.static("image"))

// API That get Product
Products.get("/Get", async (req, res)=>{
    const GetProduct =  await Productschema.find()
    res.send(GetProduct)
})

// API that get Products whithe ther _id
Products.get("/Get/single/:id", async (req, res)=>{
    const GetsingleProduct =  await Productschema.findById(req.params.id)
    res.send(GetsingleProduct)
})

// API that update Product
Products.put("/Update/:id", uploadimage.single("image"), async (req, res)=>{
    const updateProduct = await Productschema.updateOne(
        {_id : req.params.id},
        {$set : {
            image: req.file? req.file.filename : req.body.image,
            title: req.body.title,
            price: req.body.price,
        }})
    if(updateProduct){
        res.send("Updated seccssefully ")
    }
})
// API that delete product by _id
Products.delete("/Delete/:id", async (req, res)=>{
    const deleteProduct = await Productschema.deleteOne({_id : req.params.id})
    if(deleteProduct){
        res.send("Deleted seccssefully ")
    }
})

// API that Calculate
Products.get("/total/products", async (req, res) => {
    const AllProducts = await Productschema.countDocuments()
    res.send({AllProducts})
})

// API that Calculate

module.exports =Products
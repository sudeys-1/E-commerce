const express = require("express")
const mongoose = require("mongoose")

const cors = require("cors")
const app = express()
app.use(express.json())

app.use(cors())




//connect to Mongodb
mongoose.connect("mongodb://localhost:27017/E-commerce").then(()=>{
    console.log("Connected to MongoDB")
}).catch((error)=>{
   console.log(error)
})
// import The Schema

// app.use(Login)
const userRout= require("./routes/userRoute")
app.use( userRout)

// import products 
const Products = require("./routes/products") 
app.use( Products)

// import Order
const  Order = require("./routes/Order")
app.use(Order)

// import Admin
const Admin  = require("./routes/AdminRoute")
app.use(Admin)










app.listen(1000,()=>{
    console.log("server is running on port 1000") 
})
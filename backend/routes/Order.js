const express = require("express")
const Order  = express.Router()
const OrderSchema=require("../model/orderSchema")




//POST API
Order.post("/order/Crate", async(req,res)=>{
    const newOrder =  OrderSchema(req.body)
    const SaveOrder = await newOrder.save()
    if(SaveOrder){
        res.send(SaveOrder)
    }
})

// get API 
Order.get("/order/Get", async(req,res)=>{
    const GetOrder = await OrderSchema.find()
    res.send(GetOrder)
})
// 
Order.get("/total/orders", async (req, res) => {
    const AllOrders = await OrderSchema.countDocuments()
    res.send({AllOrders})
})

// API that claculate all perices 
Order.get("/total/prices", async (req, res) => {
    const totalPrice = await OrderSchema.aggregate([
        { $group: { _id: null, lacagta: { $sum: "$price" } } }
    ])
    res.send(totalPrice)
})





module.exports = Order
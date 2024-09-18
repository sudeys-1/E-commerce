
const mongoose = require('mongoose')



const OrderSchema =mongoose.Schema({
    item:{
        type:[],
        required:true
    },
    email:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})
module.exports= mongoose.model("Order",OrderSchema)
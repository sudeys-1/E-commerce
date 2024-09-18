const  mongoose  = require("mongoose");

const  Admin =mongoose.Schema({
        
       userName:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
})
module.exports= mongoose.model("Admin",Admin)
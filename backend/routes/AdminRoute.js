const express = require("express")
const Admin  = express.Router()
const AdminSchema=require("../model/AdminSchema")


// Post API
Admin.post("/Admin/Create", async (req, res) =>{   
    const NewAdmin = AdminSchema(req.body)
    const SaveAdmin = await NewAdmin.save()
    if (SaveAdmin){
        res.send("Admin Added  seccssefully ")
    }
})

// Get Api 
Admin.get("/Admin/Get", async (req, res) => {
    const GetAdmin = await AdminSchema.find()
    res.send(GetAdmin)
})





module.exports = Admin
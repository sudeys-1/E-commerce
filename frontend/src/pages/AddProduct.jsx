import { useState } from "react"
import Dashboard from "./dashboard"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


function Addproduct (){

    const navigate =useNavigate()
    const admin =localStorage.getItem("user")
    useEffect(()=>{
        if(!admin){
            navigate("/Login")
        }
    })

    const [Title, setTitle]=useState("")
    const [Price, setPrice]=useState("")
    const [Image, setImage]=useState(null)

    // pos API
    const HandlegetProduct =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:1000/Create",{
            "image": Image,
            "title":Title,
            "price":Price
        },
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    ).then(()=>{
        alert("Product created successfully")
    }).catch((error)=>{
        console.log(error)
    })
    }

    return    <div>
        <div>
        <Dashboard />

        </div>
        <div className="ml-[350px]   " >
        <form className="w-[450px] "  >
            <input value={Title} onChange={(event)=>setTitle(event.target.value)} className="border-[3px]  mt-[100px] rounded-[5px]   w-[350px]   p-2  " type="text" placeholder="Ente the Product Name " />
            <hr />
            <input value={Price} onChange={(event)=>setPrice(event.target.value)} className="border-[3px] mt-[30px] rounded-[5px] w-[350px]   p-2  " type="text" placeholder="Ente the Product Price" />
            <hr />
            <input   onChange={(event)=>setImage(event.target.files[0])} className="border-[3px] mt-[30px] rounded-[5px]  p-2  " type="file" placeholder="Ente the Product Image" />
            <hr />
            <button onClick={HandlegetProduct} className="h-[40px] ml-[100px] mt-[30px]  w-[150px] bg-green-300  "  >Save</button>
        </form>
        </div>
    </div>
}
export default Addproduct
import axios from "axios"
import { useState ,useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"


function Details (){

    const admin =localStorage.getItem("user")
    useEffect(()=>{
        if(!admin){
            navigate("/Login")
        }
    })

    const navigate =useNavigate()
    const Params = useParams()
    const [title, settitle]=useState("")
    const [price ,setprice]=useState("")
    const [image ,setimage] = useState("")

    const GetSingleProduct =()=>{
        axios.get(`http://localhost:1000/Get/single/${Params.id}`).then((response)=>{
            settitle(response.data.title)
            setprice(response.data.price)
            setimage(response.data.image)
        }).catch((error)=>{
            console.log(error)
        })
    } 
    useEffect(()=>{
        GetSingleProduct()
    },[])
    // Update API
    const Update =(e)=>{
        e.preventDefault() 
    axios.put(`http://localhost:1000/Update/${Params.id}`,{
            "image": image,
            "title": title,
            "price": price
        },{
            headers:{
                "Content-Type": "multipart/form-data"
            }

        }).then(()=>{
            alert("Product updated successfully")
            navigate("/Products")
        }).catch((erro)=>{
            console.log(erro)
        })

    }


    // delete API 
    const Delete =()=>{
        axios.delete(`http://localhost:1000/Delete/${Params.id}`).then(()=>{
            alert("Product deleted successfully")
            navigate("/Products")
        }).catch((error)=>{
            console.log(error)
        })
    }

    return <div>
         <div>
            <img className="h-[400px] ml-[25%] mt-[50px]  "  src={`http://localhost:1000/images/${image}`} alt="" />
         </div>
         <div className="ml-[10%] mt-[100px]  " >
            <input   value={title}  onChange={(event)=> settitle(event.target.value)}  type="text" />
            <br />
            <input   value={price}  onChange={(event)=> setprice(event.target.value)}  type="text" />
            <br />
            <input    onChange={(event)=>setimage(event.target.files[0])}  type="file" />
          
         </div>
         <div  className="ml-[10%]" >
            <button onClick={Update} className="h-[30px]  w-[100px] bg-green-500   " >Update</button>
            <button onClick={Delete}  className="h-[30px]  w-[100px] bg-red-500   " >Delete</button>
         </div>
    </div>
}

export default Details
import Dashboard from "./dashboard"
import axios from "axios"
import { Link } from "react-router-dom"
import { useState ,useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Products (){

    const [products , setProducts]=useState([])
    const [search , setsearch ]=useState("")
    const handleSearch =(event)=>{
        setsearch(event.target.value)
    }
    const navigate =useNavigate()
    const admin =localStorage.getItem("user")
    useEffect(()=>{
        if(!admin){
            navigate("/Login")
        }
    })

    const handleGetProducts =()=>{
        axios.get("http://localhost:1000/Get").then((response)=>{
            setProducts(response.data)

        }).catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        handleGetProducts()
    },[])


    return    <div>
        <div>
            <Dashboard />
        </div>
    <div className="ml-[21%]   " >
        <h1>Search</h1>
        <input onChange={handleSearch} className=" pl-[10px]  mb-[20px]  bg-primaryColor w-[250px] h-[40px] rounded-[5px] text-white  "  type="text" placeholder="Search " />
        <hr/>
      <table className="text-center w-full " >
        <tr>
            <th className="text-[25px] font-bold  " >Title</th>
            <th className="text-[25px] font-bold  " >Price</th>
            <th className="text-[25px] font-bold  " >image</th>
            <th className="text-[25px] font-bold  " >Actions</th>
        </tr>

        {
            products.filter((item) => {
                return search.toLocaleLowerCase() == ""? item
                 : item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) 
                }).map((data)=>{
                return   <tr>
                <td className="border-[1px]  h-[20px] w-[250px] text-[21px]  border-primaryColor   " >  {data.title} </td>
                <td className="border-[1px]  h-[20px] w-[350px] text-[21px]  border-primaryColor   " > $ {data.price}</td>
                <td className="border-[1px]  h-[20px] w-[350px] text-[21px]  border-primaryColor   " ><img className="h-[100px]   " src={`http://localhost:1000/images/${data.image}`} alt="" /></td>
                <Link Link to={`/details/${data._id}`} > <td className="  h-[20px]  text-[21px]    " > <button className="bg-green-400 p-2 text-[18px]  rounded-[10px]   " >Details</button> </td></Link>
            </tr>
            })
        }
      
      </table>
    </div>
    </div>
}
export default Products
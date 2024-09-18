import {NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function Dashboard (){
    const navigate =useNavigate()
    const admin =localStorage.getItem("user")
    useEffect(()=>{
        if(!admin){
            navigate("/Login")
        }
    })
    return   <div className="bg-primaryColor  fixed top-0  w-[20%] h-screen  " >
    <h1 className="pt-[20px] text-[40px] text-white pl-[20px] pb-[10px] " >E-commerce</h1>
    <hr></hr>
    <ul className="mt-[30px] flex  text-white flex-col gap-[30px]  ml-[20px] text-[20px]  " >
        <NavLink to="/Dashboard1"  > <li> <i class="fa-brands fa-microsoft  mr-[10px] "></i> Dashboard  </li></NavLink> 
        <NavLink to="/Products"  ><li> <i class="fa-brands fa-product-hunt mr-[10px]  "></i> Products  </li></NavLink> 
        <NavLink to="/AddProducts"  > <li> <i class="fa-solid fa-plus  mr-[10px] "></i> Add Product</li></NavLink> 
        <NavLink to="/Orders"  > <li> <i class="fa-solid fa-pen-nib"></i> Order  </li></NavLink> 
        {/* <NavLink to="/"  ><li> <i  class="fa-solid fa-plus  mr-[10px] "></i> Log Out</li></NavLink> 
        */}
    </ul>
    
</div>
}

export default Dashboard
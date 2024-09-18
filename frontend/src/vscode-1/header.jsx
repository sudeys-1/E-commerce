import { useState } from "react"
import { useNavigate  } from "react-router-dom"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import {Link} from "react-router-dom"


function Header ({raadin}){
    // const navigate =useNavigate()
    // const admin =localStorage.getItem("user")
    // useEffect(()=>{
    //     if(!admin){
    //         navigate("/Login")
    //     }
    // })
    const LogOut =()=>{
        localStorage.clear()
    }
    const user = localStorage.getItem("user")

    const [isOpen ,SetOPen] =useState (false)

    const OpenMenu =()=> {
        SetOPen (true)
    }
    const CloseMenu =()=> {
        SetOPen (false)
    }
    const NumberOfitems =useSelector((state)=>state.Cart.itmes)

    return <div className=" fixed w-full font-primaryFont ">

        <div className="flex justify-between bg-primaryColor   sm:h-[100px]      ">
        <Link to="/Home"><h1 className="   pt-[20px] pl-[30px] text-secondaryColor  text-[30px] sm:text-[40px] font-bold ">E-commerce</h1></Link> 
                <ul style={{display :isOpen == true ? "block" : ""}} className="  hidden  sm:flex   pt-[30px] text-secondaryColor text-[25px] gap-[50px] ">
                    <li>Home</li>
                   <Link to="/About"><li>About</li></Link> 
                </ul>
                <form className="hidden   sm:block"  >
                    <input onChange={raadin} className="w-[400px] text-primaryColor rounded-[5px] pl-[20px]  h-[40px] mt-[30px]  " type="text" placeholder="Search by name" />
                </form>
                {
                    user ? <div className="flex gap-[20px]  " >
                         <h1 className="text-[20px] text-white mt-[30px]   " >{JSON.parse(user).name} </h1>
                       <Link to="/" >  <button onClick={LogOut} className=" bg-[white] w-[90px] rounded-[10px]    h-[30px] mt-[30px]  " >LogOut </button></Link>
                    </div>
                    :<ul style={{display :isOpen == true ? "block" : ""}} className="  hidden  sm:flex   pt-[30px] text-secondaryColor text-[25px] gap-[50px] ">
                    <Link  to="/Login" > <li>Login</li> </Link>
                    <Link to="/Register"><li>Register</li></Link> 
                 </ul>
                }
                


                <Link to="/Cart">
                  <i className="fa-solid fa-cart-shopping text-white text-[25px]   pr-[30px]  pt-[34px]   "><span className="text-[20px] ml-[10px]">{NumberOfitems.length}</span></i>
                </Link>
                <i onClick={OpenMenu }  style={{display :isOpen == true ? "none" : ""}} className="fa-solid fa-bars text-secondaryColor text-[25px]   mr-[20px]  mt-[34px]     sm:hidden  "></i>
                <i onClick={CloseMenu }  style={{display :isOpen == true ? "block" : ""}}  className="fa-solid fa-x   text-secondaryColor text-[25px] mr-[20px]  mt-[34px] hidden   sm:hidden   "></i>

        </div>





    </div>
}

export default Header
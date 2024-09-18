import axios from "axios"
import { useState } from "react"



function Register(){

    const [name ,setName]=useState("")
    const [userName , setUserName]=useState("")
    const [Password , setPassword]=useState("")

    const HandleRegister =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:1000/user/register",{
            "name":name,
            "userName":userName,
            "password":Password

        }).then(()=>{
            alert("User added successfully")
        }).catch((error)=>{
            console.log(error)
        })
    }





    return  <div>
    <div className="ml-[550px]  rounded-[10px]  bg-primaryColor w-[350px]   mt-[200px] " >
        <form className="text-center text-white pt-[20px] ml-[20px]  h-[400px] w-[300px]   "  >
            <h1 className=" text-white  text-[25px]   " >Register</h1>
            <input value={name}  onChange={(event)=> setName(event.target.value)} className="p-2 rounded-[5px] mt-[20px]   bg-transparent border-[1px] border-blue-400  "  type="text"  placeholder="Enter New   Name" />
            <br />
            <input value={userName}  onChange={(event)=> setUserName(event.target.value)} className="p-2 rounded-[5px] mt-[20px]   bg-transparent border-[1px] border-blue-400  "  type="text"  placeholder="Enter New User  Name" />
            <br />
            <br />
            <input value={Password}  onChange={(event)=> setPassword(event.target.value)} className="p-2 rounded-[5px]   bg-transparent border-[1px] border-blue-400  "  type="text"  placeholder="Enter User Password" />
            <br />
            <button onClick={HandleRegister} className="mt-[20px] bg-white h-[30px] w-[100px] text-[20px] rounded-[4px]  text-black "  >Register</button>
        </form>
    </div>

</div>
}
export default  Register
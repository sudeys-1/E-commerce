import axios from "axios"
import { useState  } from "react" 
import { useNavigate } from "react-router-dom"
 
 function Login (){
    const navigate = useNavigate()
    const [username , setusername]= useState("") 
    const [password , setpassword]= useState("") 

    const HandleLogin = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:1000/user/login",{
            "userName": username,
            "password": password
        }).then((response)=>{
            if(response.data.success){
                alert("Login successful")
                localStorage.setItem("user",JSON.stringify(response.data.userLogIn))
                navigate("/")
                
            }else{
                alert("Incorrect username and password ")
            }
        }).catch((error)=>{
            console.log(error)
        })
    }


    return <div>
        <div className="ml-[550px]  rounded-[10px]  bg-primaryColor w-[350px]   mt-[200px] " >
            <form className="text-center pt-[20px] ml-[20px]  h-[400px] w-[300px]   "  >
                <h1 className=" text-white  text-[25px]   " >LogIn</h1>
                
                <br />

                <br />
                <input value={username}  onChange={(event)=> setusername(event.target.value)} className="p-2 rounded-[5px] mt-[20px]  text-[white]  bg-transparent border-[1px] border-blue-400  "  type="text"  placeholder="Enter User Name" />
                <br />
                <br />
                <input value={password}  onChange={(event)=> setpassword(event.target.value)} className="p-2 rounded-[5px]   text-[white] bg-transparent border-[1px] border-blue-400  "  type="password"  placeholder="Enter User Password" />
                <br />
                <button onClick={HandleLogin} className="mt-[20px] bg-white h-[30px] w-[100px] text-[20px] rounded-[4px]  text-black "  >LogIn</button>
            </form>
        </div>

    </div>
}

export default Login
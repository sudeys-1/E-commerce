import { useNavigate } from "react-router-dom"


function About (){
    const navigate =useNavigate()
    const admin =localStorage.getItem("user")
    useEffect(()=>{
        if(!admin){
            navigate("/Login")
        }
    })
    return <div>
        <h1>this is About Bage</h1>
    </div>
}

export default About

import { useEffect, useState } from "react"
import Dashboard from "./dashboard"
import axios from "axios"

function Dashboard1(){
    const [TotalOrders , setTotalOrders ] =useState({})
    const [TotalProducts , setTotalProducts] = useState({})
    const [totalPrice , setTotalPrice]= useState([])

    const handleTotalOrders =()=>{
        axios.get("http://localhost:1000/total/orders").then((res)=>{
            setTotalOrders(res.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    const handleTotalProducts =()=>{
        axios.get("http://localhost:1000/total/products").then((res)=>{
            setTotalProducts(res.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    const handleTotalPrice = ()=>{
        axios.get("http://localhost:1000/total/prices").then((res)=>{
            setTotalPrice(res.data[0])
        }).catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        handleTotalOrders()
        handleTotalProducts()
        handleTotalPrice()
    },[])


    return <div>
        <div>
    <Dashboard />
        </div>
    <div className="ml-[25%] flex  gap-[100px] mt-[50px]    " >

    <div className="h-[300px] w-[250px] bg-red-500  rounded-[10px]  " >
             <h1 className="text-[white] text-[20px] mt-[40px] ml-[65px]  " >Total Orders</h1>
             <h1 className="text-[40px] text-center mt-[50px] text-white   " >{TotalOrders.AllOrders}</h1>
    </div> 

    <div className="h-[300px] w-[250px] bg-purple-600 rounded-[10px]  " >
             <h1 className="text-[white] text-[20px] mt-[40px] ml-[65px]  " >Total Products</h1>
             <h1 className="text-[40px] text-center mt-[50px] text-white   " >{TotalProducts.AllProducts}</h1>
    </div> 
    <div className="h-[300px] w-[250px] bg-purple-600 rounded-[10px]  " >
             <h1 className="text-[white] text-[20px] mt-[40px] ml-[65px]  " >Total Price</h1>
             <h1 className="text-[40px] text-center mt-[50px] text-white   " > $ {totalPrice.totalPrice}</h1>
    </div> 
    </div>

    </div>
}

export default Dashboard1
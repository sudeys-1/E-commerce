import Dashboard from "./dashboard"
import axios from "axios"
import { useState, useEffect } from "react"

function Orders (){

    const [Orders ,setOrders ] =useState([])

    const handleOrders = ()=>{
        axios.get("http://localhost:1000/order/Get").then((res)=>{
            setOrders(res.data)
        })
    }

    useEffect(()=>{
        handleOrders()
    },[])


    return <div>
    <div>
    <Dashboard />
    </div>
    <div className="ml-[21%]    " >
    <table className="text-center w-full " >
        <tr>
            <th className="text-[25px] font-bold  " >Email</th>
            <th className="text-[25px] font-bold  " >Price</th>
            <th className="text-[25px] font-bold  " >Quantity</th>
            <th className="text-[25px] font-bold  " >Items</th>
            <th className="text-[25px] font-bold  " >Items</th>
            <th className="text-[25px] font-bold  " >Items</th>
            <th className="text-[25px] font-bold  " >Image</th>
        </tr>

        {
            Orders.map((data)=>{
                return   <tr>
                <td className="border-[1px]  h-[20px] w-[250px] text-[21px]  border-primaryColor   " >  {data.email} </td>
                <td className="border-[1px]  h-[20px] w-[350px] text-[21px]  border-primaryColor   " > $ {data.price}</td>
                <td className="border-[1px]  h-[20px] w-[350px] text-[21px]  border-primaryColor   " >  {data.quantity}</td>
                <td className="border-[1px]  h-[20px] w-[350px] text-[21px]  border-primaryColor   " >  {data.item[0]}</td>
                <td className="border-[1px]  h-[20px] w-[350px] text-[21px]  border-primaryColor   " >  {data.item[1]}</td>
                <td className="border-[1px]  h-[20px] w-[350px] text-[21px]  border-primaryColor   " >  {data.item[2]}</td>
                <td className="border-[1px]  h-[20px] w-[350px] text-[21px]  border-primaryColor   " ><img className="h-[100px]   " src={`http://localhost:1000/images/${data.image}`} alt="" /></td>
            </tr>
            })
        }
      
      </table>

    
       
    </div>
    </div>
}
export default Orders
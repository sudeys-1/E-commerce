import { useSelector } from "react-redux"
import axios from "axios"
function PriceCart (){
    const Total =useSelector((state)=>state.Cart.totalPrice)
    const Number =useSelector((state)=>state.Cart.itmes)
    const useEmail =localStorage.getItem("user")
    const item =[]
    const TotalPrice =[]
    Number.forEach((data)=>{
        item.push(data.title)
    })
    // Total .forEach((data)=>{
    //     TotalPrice.push(data.totalPrice)
     
    // })


    // Api 
    const handleOrder= (e)=>{
        e.preventDefault() 
         axios.post("http://localhost:1000/order/Crate",{
            "email":JSON.parse(useEmail).userName,
            "price":Total,
            "quantity":Number.length,
            "item":item,
            "total":TotalPrice
        }).then(()=>{
            alert("Order placed successfully")
        }).catch((error)=>{
            console.log(error)
        })

    }




    return <div>
        <div className="    top-[220px] fixed p-[20px]  hover:shadow-2xl    right-[50px] rounded-[10px] w-[300px]  ">
            <h1>Total Item</h1>
            <h1 className="font-bold" > {Number.length} </h1>
            <h1>Total Price</h1>
            <h1 className="font-bold" >${Total}</h1>
            <button onClick={handleOrder} className=" bg-primaryColor text-white rounded mt-[20px] py-[10px] px-[50px] " >Bay Now</button>
        </div>
    </div>
}

export default PriceCart
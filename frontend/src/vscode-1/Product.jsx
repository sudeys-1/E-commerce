import { useDispatch } from "react-redux"
import { Toaster,toast } from "react-hot-toast"
import { addItemsToCart ,CalculateTotalPrice } from "../redux/reducer/Cart"



function Product ({items}){
    const dispash=useDispatch()

    const handleCart =()=>{
        dispash(addItemsToCart(items))
        dispash(CalculateTotalPrice())
        toast.success("success")
    }

    return <div className="hover:shadow-2xl mt-[200px] h-[380px] w-[250px] m-[20px] ">
            <img className="h-[250px] ml-[20px] mt-[20px] w-[200px]  " src={`http://localhost:1000/images/${items.image}`} alt="" />
            <h1 className="font-bold mt-[10px] ml-[20px] ">{items.title.substring(0,40)+("...")}</h1>
            <div className="flex justify-between ml-[20px]   ">
            <h1 className=" mt-[20px] font-bold " >$ {items.price}</h1>
            <button onClick = {handleCart}  className="  mr-[20px] bg-primaryColor  mt-[17px] text-secondaryColor  rounded-full h-[30px]  w-[30px]  ">+</button>
            </div>
            <Toaster/>
    </div>
}

export default Product
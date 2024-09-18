import { useSelector,useDispatch } from "react-redux"
// import { useNavigate  } from "react-router-dom"
// import { useEffect } from "react"
import Header2 from "../vscode-1/header-2"
import PriceCart from "../vscode-1/PriceCart"
import {removeItemsFromCart,CalculateTotalPrice} from "../redux/reducer/Cart"
function Cart (){
   const Kaar =useSelector((state)=> state.Cart.itmes)
   const dispatch =useDispatch()
   
   const handleremoveitemsFromCart =(id)=>{
      dispatch(removeItemsFromCart(id))
      dispatch(CalculateTotalPrice())
}
   //  const navigate =useNavigate()
   //  const admin =localStorage.getItem("user")
   //  useEffect(()=>{
   //      if(!admin){
   //          navigate("/Login")
   //      }
   //  })


return <div> 


            <Header2 />
            {
               Kaar.length ===0 ?<p className="text-[30px] pt-[200px]  text-center  " >The Cart is emoty </p>  : <div>
                   <div className="grid ml-[50px] pt-[100px]  gap-[40px] grid-cols-[300px_300px_300px]">


{
   Kaar.map((data) => {
      return <div>
      <div className=" hover:shadow-2xl  rounded  mt-[100px] h-[360px] w-[250px] m-[20px] ">
      <img className="h-[250px] ml-[20px] mt-[20px] w-[200px]  "src={`http://localhost:1000/images/${data.image}`} alt="" />
      <h1 className="font-bold mt-[10px] ml-[20px] ">{data.title.substring(0,40)+("...")}</h1>
      <div className="flex justify-between ml-[20px]   ">
      <h1>$ {data.price}</h1>
      <button onClick={()=>handleremoveitemsFromCart(data)} className=" text-[25px] mr-[20px ">X</button>
      </div>
      </div>
      </div>
   })
   }


   </div>

   <PriceCart />

      </div>
            }
      
               </div>
}

export default Cart
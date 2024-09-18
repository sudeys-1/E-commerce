import { createSlice } from "@reduxjs/toolkit";

const CartSlice =createSlice({
    name :"Cart",
    initialState :{
        itmes : [],
        totalPrice :0
    },
    reducers :{
        addItemsToCart:(state,action )=>{
            state.itmes.push(action.payload)
        },
        CalculateTotalPrice :(state)=>{
            let total =0
            state.itmes.forEach((state)=>{
                total +=state.price
            })
            state.totalPrice = total
        },
        removeItemsFromCart :(state,action)=>{
            state.itmes = state.itmes.filter((product)=>product._id != action.payload._id)
        }
    }
})

export const {addItemsToCart,removeItemsFromCart,CalculateTotalPrice} = CartSlice.actions
export default CartSlice.reducer
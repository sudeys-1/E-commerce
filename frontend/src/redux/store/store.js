import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../reducer/Cart";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist"






const StorageConfig = {
    key :"root",
    storage
}
const allReducer =combineReducers({
    Cart :CartSlice
})

const PrisistFunction =persistReducer( StorageConfig ,allReducer)
 


const Store =configureStore({
    reducer:PrisistFunction
        
    
})

export default Store
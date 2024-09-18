import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import About from "./pages/About"
import Dashboard from "./pages/dashboard"
import Products from "./pages/products"
import Orders from "./pages/order"
import Addproduct from "./pages/AddProduct"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Details from "./pages/Details"
import Dashboard1 from "./pages/Dashboard2"



function App (){
    return <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/Orders" element={<Orders/>}></Route>
        <Route path="/AddProducts" element={<Addproduct/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/Dashboard1" element={<Dashboard1/>}></Route>
        <Route path="/Details/:id" element={<Details/>}></Route>
    </Routes>
}

export default App 
import Product from "./Product"
import axios from "axios"
import Header from "./header"
import  PacmanLoader  from "react-spinners/PacmanLoader"
import { useState,useEffect } from "react"

function ProductList (){
    const [loading ,setLoading]=useState(false)
    const [product ,setProduct]=useState([])
    const [Search,setSearch] =useState("")
    const handleSearch =(event)=>{
        setSearch(event.target.value)
    }


    const HandleGetProduct =()=>{
        setLoading(true)
        axios.get("http://localhost:1000/Get").then((response)=>{
                        setProduct((response.data))
                        setLoading(false)
        }).catch((error)=>{
                console.log(error)
        })
    }

    useEffect(()=>{
        HandleGetProduct()
    },[])




    return loading == true ? <PacmanLoader loading={loading} />: <div>
        <Header raadin={handleSearch} />
    <div className="grid ml-[50px] gap-[40px] grid-cols-[300px_300px_300px_300px]">
        {
            product.filter((item)=>{
                return Search.toLowerCase()=="" ?item
                :item.title.toLowerCase().includes(Search.toLowerCase())

            }).map((data)=>{
                return <Product items={data} />
            })
        }

    </div>
    </div>
}

export default ProductList
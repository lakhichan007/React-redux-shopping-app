import React from "react";
import {setProducts} from "../redux/action/action"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"
import "./product.css"
import { useEffect } from "react";
const Products=()=>{
    const dispatch=useDispatch()
    const products=useSelector((state)=>state.productReducer.products)
    // console.log(products)
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            // console.log(res.data)
            dispatch(setProducts(res.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
 return(
    <>
    <div id="item-container">
        {  products.map(ele=>{
        return(
            <div className="card-box" key={ele.id}>
                <img className="image" src={ele.image}/>
            </div>
        )
    })}
    </div>
    </>
 )
  
   
}
export default Products
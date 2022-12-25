import React from "react";
import {setProducts} from "../redux/action/action"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"
import "./product.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Products=()=>{
    const dispatch=useDispatch()
    const products=useSelector((state)=>state.productReducer.products)
    console.log(products)
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
    <p>sdfghjk</p>
    <div id="item-container">
        {  products.map(ele=>{
        return(
            
            <div className="card-box" key={ele.id}>
                <Link to={`/product/${ele.id}`}>
                <img className="image" src={ele.image}/>
                <p>{ele.title}</p>
                <p className="price-tag">₹ {ele.price*100}</p>
                <p className="category-tag">{ele.category}</p>
                </Link>
            </div>
        )
    })}
    </div>
    </>
 )
  
   
}
export default Products
import React from "react";
import axios from "axios";
import "./product.css"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedProduct } from "../redux/action/action";
const ProductDetails=()=>{
    const {id}=useParams()
    const dispatch=useDispatch()
    // console.log(id)
useEffect(()=>{
   axios.get(`https://fakestoreapi.com/products/${id}`)
   .then((res)=>{
        dispatch(selectedProduct(res.data))
   })
   .catch((err)=>{
    console.log(err)
   })
},[])

    return(
        <>
        <p>pdetails</p>
        </>
    )
}
export default ProductDetails
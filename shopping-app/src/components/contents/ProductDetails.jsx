import React from "react";
import axios from "axios";
import "./product.css"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/action/action";
const ProductDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const product = useSelector((state) => state.selecteProductReducer)
    // console.log(product)
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                dispatch(selectedProduct(res.data))
                // console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            {Object.keys(product).length === 0 ? <h1>please wait...</h1> :
                <div id="product-container">

                    <div id="product-image-box">
                        <img id="product-image" src={product.image} />
                    </div>
                    <div id="product-details">
                        <p id="product-title">{product.title}</p>
                        <button id="rating-btn">{product.rating.rate}  <i className="fa fa-star-half-o" aria-hidden="true"></i></button>
                        <p id="review-tag">{product.rating.rate * 100+226} Ratings & {product.rating.rate * 100} Reviews</p>
                        <p id="product-price">₹ {product.price * 100}</p>
                        <p id="remaining-text"> Hurry,only {parseInt(Math.random()*10)} left !</p>
                        <p >{product.description}</p>
                        <p id="return-text">10 days Return Policy ?</p>
                        <a href="*" style={{textDecoration:"none"}}>Details</a>
                        <button id="cart-btn"><i className="fa fa-shopping-cart" aria-hidden="true"></i>  ADD TO CART</button>
                        <button id="buy-btn"><i className="fa fa-bolt" aria-hidden="true"></i>  BUY NOW</button>
                    </div>

                </div>
            }
        </>
    )
    // }

}
export default ProductDetails
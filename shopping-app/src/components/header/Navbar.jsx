import React from "react";
import "./Navbar.css"
const Navbar = () => {
    return (
        <>
            <div id="navbar">
                <div>
                    <img id="shoppin-logo" src={require("./images/shopping.png")}/>
                </div>
                <div>
                    <input id="serach-box" type="text" placeholder="search here..."/>
                </div>
                <div>
                <i id="header-login" className="fa fa-user-o" aria-hidden="true">  Login</i>
                <i id="header-cart" class="fa fa-shopping-cart" aria-hidden="true">Cart</i>  
                </div>
            </div>
        </>
    )
}
export default Navbar
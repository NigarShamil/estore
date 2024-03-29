import React from "react";
import Logo from "./VSF.svg";
import cartIcon from "./Empty Cart.svg"
import './navbar.css'

export default function Navbar() {
    return (
        <React.Fragment>
            <div className="navbar">
                <div className="navbar_start">
                    <a href="#">CLOTHES</a>
                    <a href="#">SHOES</a>
                    <a href="#">TECH</a>
                </div>
                <div className="middle">
                    <img src={Logo} alt="logo" title="logo" />
                </div>
                <div className="navbar_end">
                <select className="currency" defaultValue={"USD"}>
                        <option value="USD" >USD $</option>
                        <option value="GBP">GBP £</option>
                        <option value="AUD">AUD A$</option>
                        <option value="JPY">JPY ¥</option>
                    </select>
                    <div className="cart">
                        <img src={cartIcon} alt="cartIcon" title="cartIcon" />
                        <div className="cart_count">0</div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

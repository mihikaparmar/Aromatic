import React from 'react'
import './App.css'


export default function Navbar() {
    return (
        <div>
            
        <div class="header1">
            <div class="logo">
                <img src="logo.png" alt="Logo" class="hvr-pop"/>
            </div>
            
            <div class="navbar">
                <div class="navbar-left">
                    <a href="#home" class="hvr-float-shadow">Home</a>
                    <a href="#catalog" class="women hvr-float-shadow">Catalog</a>
                    <a href="#shop" class="hvr-float-shadow">Shop</a>
                    <a href="#blog" class="catlog hvr-float-shadow">Blog</a>
                    <a href="#customer" class="hvr-float-shadow">Customer Zone</a>
                </div>
                <div class="navbar-right">
                   <a id="myBtn"><i class="fa fa-heart fa-2x header-heart hvr-grow"></i></a>
                    <i class="fas fa-user-alt fa-2x hvr-grow"></i>
                    <a href="index.php">Login In</a>
                    <i class="fas fa-shopping-bag fa-2x header-cart hvr-grow"></i>
                </div>
            </div>
        </div>
    
        </div>
    )
}






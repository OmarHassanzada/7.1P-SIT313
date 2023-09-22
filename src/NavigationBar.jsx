import React from 'react'
import './App.css'

import { Outlet, Link } from 'react-router-dom';

function NavigationBar() {
    return <div>
        <div class="topnav">
            <logo>
                <img src = {require("./Images/Logo.png")} alt="logo" width={150} height={50} />
            </logo>
            <a href="#login"><Link to='login'>Login</Link></a>
            <a href="#account"><Link to='registration'>Create Account</Link></a>
            <a href="#news"><Link to='dev'>Find Dev</Link></a>
            <a href="#contact"><Link to='jobs'>Find Jobs</Link></a>
            <a href="#home"><Link to='/'>Home</Link></a>
        </div>
        <Outlet />  
    </div>
}   
export default NavigationBar;
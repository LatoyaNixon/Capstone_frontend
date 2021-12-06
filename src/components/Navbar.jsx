import React, { Component} from "react";
import {Link as RouterLink } from 'react-router-dom';

function NavBar() {

    const logout = () => {
        localStorage.removeItem('token');
        //alert("Logging you out")
        window.location.href = "/login";
    }
    return (
        <na>
            <ul>
                <RouterLink to="/login">
                    <li>Login</li>
                </RouterLink>
                <li>
                    <a href="/" onClick={logout}>Logout</a>
                </li>
                <RouterLink to="register">
                    <li>Register</li>
                </RouterLink>
                <RouterLink to="buddy">
                    <li>Buddy</li>
                </RouterLink>
                <RouterLink to="tutorials">
                    <li>Tutorials</li>
                </RouterLink>
            </ul>
        </na>
    )

    
    
}
               

export default NavBar;
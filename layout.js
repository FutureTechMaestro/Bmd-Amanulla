import React from "react";
import {Outlet,Link} from "react-router-dom";
const Form = () =>{
    return(
        <>
        <nav>
            
            <ul>
                <li>
                    <Link to="/">regform</Link>
                </li>
                <li>
                    <Link to="/login">login</Link>
                </li>
                <li>
                    <Link to="/signin">sign up</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    );
} 
export default Form;

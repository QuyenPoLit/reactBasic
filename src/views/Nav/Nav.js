import React from "react";
import './nav.scss';

import {
    Link, NavLink
  } from "react-router-dom";
  
class Nav extends React.Component{
    render(){
        return(
            <div class="topnav">
                <Link to="/" >Home</Link>
                <Link to="/todo">Todo</Link>
                <Link to="/about">About</Link>
                <Link to="/user">Users</Link>
            </div>
        )

    }
    
}

export default Nav;
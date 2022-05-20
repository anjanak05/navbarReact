import React from "react";
import "../components/navbarHeder.css"

const Logo = () =>{
    return <div>
<h4>LOGOBAKERY</h4>
    </div>
}

const Links  = ({links}) =>{
    return ( 
<a  href="#" className="linkBtn"> {links} </a>
  
    )
}

const Button  = () =>{
    return <div>
<button id = "contactBtn">Contact</button>
    </div>
}
export {Logo, Links, Button}
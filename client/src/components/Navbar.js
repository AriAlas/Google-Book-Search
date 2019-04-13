import React from "react";
import { Link } from "react-router-dom";

function Navbar (){
    return (
        <nav className="navbar">
            <div className = "navbar-brand">
                <Link className="navbar-item" to = "/">
                    <img src ="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Google_Play_Books_icon_-_vector.svg/1200px-Google_Play_Books_icon_-_vector.svg.png" alt = "Google Books" to = "/"/>
                </Link>
            </div>
            <div className = "navbar-menu">
                <div className = "navbar-start">
                    <Link className = "navbar-item" to = "/search">
                        Search
                    </Link>
                    <Link className = "navbar-item" to = "/saved">
                        Saved
                    </Link>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;
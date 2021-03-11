import React from "react";
import logo from "./assets/mashup-logo.svg";

class Menu extends React.Component{
    render(){
        return(
            <div className="sidenav">
                <div className="nav-logo">
                    <div className="img-wrapper">
                        <img className="nav-img" alt=""
                        src={logo}></img>
                    </div>
                </div>
                <a className="nav-profile" href="/projects">Projects</a>
                <a className="nav-messages" href="/message">Messages</a>
                <a className="nav-problems" href="/questions">Problems</a>
                <a className="nav-stats" href="/statistics">Statistics</a>
                <a className="nav-solve" href="/ide">IDE</a>
                <a className="nav-projects" href="/profile">Profile</a>
                <a className="nav-logout" href="/">Logout</a>
            </div>
        );
        
    }
}

export default Menu;
import React from "react";
import logo from "../assets/mashup-logo.svg";
import {details} from "../sample-data/sample-credentials.js";
import Menu from "../Menu.js";
import Profile from "../profile/Profile.js";

import axios from "axios";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: "", password: "", success: false};
        this.handleChange = (e) => {
            var name = e.target.name;
            var currText = e.target.value;
            this.setState({[name]: currText});
        }
        this.handleSubmit = async (e) => {
            e.preventDefault();
            console.log("Username : "+this.state.username);
            console.log("Password : "+this.state.password);
            var obj = {
                username: this.state.username,
                password: this.state.password 
            };
            var res = await axios.post("http://localhost:5000/login", obj);
            var found = false;
            for(var i=0;i<details.length;i++){
                if(details[i].username === obj.username && details[i].password === obj.password){
                    found = true;
                    break;
                }
            }
            if(found){
                this.setState({success: found});
            }
        }
    }
    render(){
        var element1 = (
            <React.Fragment>
                <div className="box" id="heading">
                    <h1 className="login-heading">Log In</h1>
                </div>
                <div className="box">
                    <form className="item">
                        <input type="text" className="text-input" name="username" onChange={this.handleChange}
                        placeholder="Username" autoComplete="off"></input>
                        
                    </form>
                    <form className="item">
                        <input type="password" className="password-input" name="password" onChange={this.handleChange}
                        placeholder="Password" autoComplete="off"></input>
                    <button className="login-button" onClick={this.handleSubmit}>+</button>
                    </form>
                    <div>
                        <p className="login-p middle">Don't have an account? <span className="redirect">Sign up</span></p>
                    </div>
                </div>
                
                <div className="flex-container">
                    <img className="img-responsive site-logo" alt=""
                    src={logo}></img>
                </div>
            </React.Fragment>
        );

        var element2 = (
            <React.Fragment>
                <Menu />
                <Profile />
            </React.Fragment>
        );
        return this.state.success ? element2 : element1;

    }
}

export default Login;
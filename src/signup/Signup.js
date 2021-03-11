import React from "react";
import logo from "../assets/mashup-logo.svg";

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: "",
            password: "",
            confPassword: ""
        };
        this.handleChange = (e) => {
            var name = e.target.name;
            var newVal = e.target.value;

            this.setState({[name]: newVal});
        }
        this.handleSubmit = (e) => {
            e.preventDefault();
            if(this.state.password === this.state.confPassword){
                console.log("Passwords match!");
            }
        }
    }
    render(){
        return(
            <React.Fragment>
                <div className="box" id="heading">
                    <h1 className="login-heading">Sign Up</h1>
                </div>
                <div className="box">
                    <form className="item">
                        <input type="text" name="username" onChange={this.handleChange}
                        placeholder="Username" className="text-input" autoComplete="off"></input>
                        
                    </form>
                    <form className="item">
                        <input type="password" name="password" onChange={this.handleChange}
                        placeholder="Password" className="password-input" autoComplete="off"></input>
                    </form>
                    <form className="item">
                        <input type="password" name="confPassword" onChange={this.handleChange}
                        placeholder="Confirm Password" 
                        className="password-input" autoComplete="off"></input>
                    <button className="login-button" onClick={this.handleSubmit}>+</button>
                    </form>
                    <div>
                        <p className="login-p middle">Already have an account? <span className="redirect">Login</span></p>
                    </div>
                </div>
                
                <div className="flex-container">
                    <img className="img-responsive site-logo" alt=""
                    src={logo}></img>
                </div>
            </React.Fragment>
        );
    }
}
export default Signup;
import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.className = "header";
        this.state = {title: "Direct Messages"};
    }
    render(){
        return (
            <div className={this.className}>
                <h1>{this.state.title}</h1>
            </div>
        );
    }
}
export default Header;
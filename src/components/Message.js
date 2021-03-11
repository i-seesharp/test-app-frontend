import React from "react";

class Message extends React.Component{
    constructor(props){
        super(props);
        this.state = {color: "blue"};
    }
    static getDerivedStateFromProps(props, state){
        if(props.who !== "me") return {color : "black"};
        else return {color : "blue"};
    }
    render(){
        var classVal;
        
        classVal = (this.state.color === "blue") ? "my-msg" : "other-msg";
        return(
            <div className={"message "+classVal}>
                <p className="text">{this.props.msg}</p>
            </div>

        );
    }
}
export default Message;
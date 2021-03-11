import React from "react";

class TextBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {msg: ""};

        this.stateChange = (e) => {
            var newState = e.target.value;
            this.setState({msg: newState});
        }
        this.sendMsg = (e) => {
            e.preventDefault();
            console.log("Sent Message is : ",this.state.msg);
            var formattedMsg = {
                who: "me",
                content: this.state.msg
            }
            this.setState({msg: ""});
            this.props.update(formattedMsg);
        }
    }
    render(){
        var txtBox = "txt-box";
        return(
            <div className="chat-form-container">
                        <form id="chat-form">
                        <input
                            id="msg"
                            type="text"
                            placeholder="Enter Message"
                            value={this.state.msg}
                            onChange={this.stateChange}
                            required
                            autocomplete="off"
                        />
                        <button onClick={this.sendMsg} className="btn"><i className="fas fa-paper-plane"></i>+</button>
                        </form>
            </div>
        );
    }
}
export default TextBox;
import React from "react";

class ChatMessages extends React.Component{
    constructor(props){
        super(props);
        this.scrollToBottom = () => {
            this.messagesEnd.scrollIntoView({ behavior: "smooth" });
        }
    }
    render(){
        var msgComponents = this.props.msgComponents;
        return(
            <div className="chat-messages">
                <ul style={{listStyle: "none"}}>
                {msgComponents}
                </ul>
                <div style={{ float:"left", clear: "both" }}
                ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>
        );
    }
    componentDidMount(){
        this.scrollToBottom();
    }
    componentDidUpdate(){
        this.scrollToBottom();
    }
}
export default ChatMessages;
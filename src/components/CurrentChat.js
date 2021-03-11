import React from "react";
import Message from "./Message.js";
import ConversationList from "./ConversationList.js";
import TextBox from "./TextBox.js";
import ChatMessages from "./ChatMessages.js";

class CurrentChat extends React.Component{
    constructor(props){
        super(props);
        this.state = {"msgs": props.msg,
        "conversations": props.conversations,
       "name": props.name};

        this.addMessage = (msg) => {
            this.setState((state, props) => {
                state["msgs"][state.name].push(msg);
                return {"msgs": state["msgs"]};
            });
            props.changeLastMsg(this.state.name, msg);
        }
        this.changeChat = (nm) => {
            console.log(nm);
            this.setState({"name": nm});
        }
    }
    render(){
        //Props contains a series of Message Components
        var msgs = this.state["msgs"][this.state.name];
        var msgComponents = [];
    
        for(var i=0;i<msgs.length;i++){
            var component = <Message name={this.state.name} who={msgs[i].who} msg={msgs[i].content}/>
            msgComponents.push(<li key={i+1}>{component}</li>);
        }
        var convList = <ConversationList changeChat={this.changeChat} conversations={this.state.conversations} />
        return(
            <React.Fragment>
                <div className="chat-container">
                <p>Click on any conversation card to switch to that conversation.</p>
                <p>Press Enter or click "+" to send your typed out message</p>
                <br></br>
                    <header className="chat-header">
                        <h1><i className="fas fa-smile"></i> DirectMessaging</h1>
                        <input type="text" className="search-friends"
                        placeholder="Search Friends"></input>
                    </header>
                    <main className="chat-main">
                        <div className="chat-sidebar">
                        <ul id="users">
                            {convList}
                        </ul>
                        </div>
                        <ChatMessages msgComponents={msgComponents} />           
                    </main>
                    <TextBox update={this.addMessage} />
                    </div>
            </React.Fragment>
            
        );
    }
}
export default CurrentChat;
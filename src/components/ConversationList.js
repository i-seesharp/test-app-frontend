import React from "react";
import Conversation from "./Conversation.js";

class ConversationList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current: "Ganesh"
        };
        this.changeCurrent = (newName) => {
            this.setState({current: newName});
            props.changeChat(newName);
        }
    }
    static getDerivedStateFromProps(props, state){
        return {"conversations": props.conversations};
    }
    render(){
        var convArr = [];
        var len = this.state["conversations"].length;
        var i = 0;
        for(var key in this.state["conversations"]){
            var elem = this.state["conversations"][key];
            convArr.push(<li><Conversation key={i+1}
                current={this.state.current}
                handleChange={this.changeCurrent}
                convo={elem}/></li>);
            i = i + 1;
        }
        return(
            <div className="conv-list">
                <h3>Ongoing Conversations : </h3>
                <ul>
                    {convArr}
                </ul>
            </div>
        );
    }
}
export default ConversationList;
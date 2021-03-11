import React from "react";

class Conversation extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = () => {
            var name = this.props.convo.name;
            props.handleChange(name);
        }

    }
    render(){
        const data = this.props.convo;
        console.log(data);
        var extraClass = (data.name === this.props.current) ? "-selected":"";
        return(
            <div className={"conversation"+extraClass} 
            onClick={this.handleClick}>
                <div className="conv-img"></div>
                <h4 className="conv-name">{data.name}</h4>
                <p className="conv-gray">{data.lastMsg}</p>
            </div>
        );
    }
}
export default Conversation;
import React from "react";

class Friend extends React.Component{
    render(){
        return(
        <div className="friend-container">
            <div className="friend-rating">
                {this.props.rating}
            </div>
            <div className="friend-name">
                {this.props.name}
            </div>
            <div className="friend-solved">
                {this.props.solved}
            </div>
        </div>
        );
    }
}

export default Friend;
import React from "react";

class ViewCounter extends React.Component{
    render(){
        return(
            <div className="view-counter">
                <h3>Profile Views : {this.props.views}</h3>
            </div>
        );
    }
}

export default ViewCounter;
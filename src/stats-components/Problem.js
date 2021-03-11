import React from "react";

class Problem extends React.Component{
    render(){
        return(
            <div className="problem-card">
                <h3 className="problem-name">{this.props.name}</h3>
                <span className="problem-difficulty">{this.props.difficulty}</span>
                <p className="problem-desc">{this.props.desc}</p>
            </div>
        );
    }
}

export default Problem;
import React from "react";
import Problem from "./Problem.js";

class Solved extends React.Component{
    render(){
        var lstOfProblems = [];
        var problems = this.props.problems;

        for(var i=0;i<problems.length;i=i+1){
            var element = <Problem name={problems[i].name}
                            desc={problems[i].desc}
                            difficulty={problems[i].difficulty} />
            lstOfProblems.push(<li key={i+1}>{element}</li>);
        }

        return(
            <div className="solved-container">
                <h2 className="solved-heading">Problems Solved</h2>
                <ul>
                    {lstOfProblems}
                </ul>
            </div>
        );
    }
}

export default Solved;
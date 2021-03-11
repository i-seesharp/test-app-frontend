import React from "react";
import ProjectCard from "./ProjectCard.js";
import chessApi from "../assets/chess-api.PNG";
import loadBalancer from "../assets/load-balancer.PNG";
import linkedInClone from "../assets/linkedin-clone.PNG";

class ProjectList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current: ""
        };
        this.changeCurrent = (name) => {
            this.setState({current: name});
        }
    }
    render(){
        var cards = [];
        var myImg = "";
        for(var i=0;i<this.props.projects.length;i++){
            var project = this.props.projects[i];
            var element = <ProjectCard current={this.state.current}
                            name={project.name}
                            desc={project.desc} lang={project.lang}
                            handleChange={this.changeCurrent} />
            
            cards.push(<li key={i+1}>{element}</li>);
        }
        if(this.state.current==="chess-api"){
            myImg = chessApi;
        }
        else if(this.state.current === "load-balancer"){
            myImg = loadBalancer;
        }
        else{
            myImg = linkedInClone;
        }
        return(
            <div className="top-project-container">
            <div className="project-container">
                <header className="chat-header">
                    <h1><i className="fas fa-smile"></i> Projects</h1>
                </header>
                <p>Click on any project card to view its files.</p>
                <div className="card-container">
                    <ul style={{listStyle: "none"}}>
                        {cards}
                    </ul>
                </div>
            </div>
            <img className="selected-file" src={myImg} alt=""></img>
        </div>
        );
    }
}
export default ProjectList;
import React from "react";

class ProjectCard extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = () => {
            this.props.handleChange(this.props.name);
        }
    }
    render(){
        var extra = (this.props.name === this.props.current)?"-selected":"";
        return(
            <div onClick={this.handleClick} className={"project-card"+extra}>
                <h3 className="project-card-name">{this.props.name}</h3>
                <p className="project-card-desc">{this.props.desc}</p>
                <p className="project-card-lang">{this.props.lang}</p>
            </div>
        );
    }
}
export default ProjectCard;
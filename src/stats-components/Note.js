import React from "react";

class Note extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = () => {
            props.deleteNote(props.title);
        }
    }
    render(){
        return(
        <div className="note-container">
            <div className="note-title">
                <h4>{this.props.title}</h4>
            </div>
            <div className="note-delete">
                <button onClick={this.handleClick} className="note-delete-btn">-</button>
            </div>
            <div className="note-text">
                <p>{this.props.text}</p>
            </div>
        </div>
        );
    }
}

export default Note;
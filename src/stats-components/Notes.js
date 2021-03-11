import React from "react";
import Note from "./Note.js";

class Notes extends React.Component{
    constructor(props){
        super(props);
        this.state = {"notes": props.notes,
                    "title": "",
                    "content": ""};
        this.handleSubmit = (e) => {
            e.preventDefault();
            this.setState((state, props) => {
                var newObj = {
                    "title": this.state.title,
                    "content": this.state.content
                }
                state["notes"].push(newObj)
                return {"notes": state["notes"],
                        "title": "",
                        "content": ""};
            });
        }
        this.handleChange = (e) => {
            var name = e.target.name;
            this.setState({[name]: e.target.value});
        }
        this.deleteNote = (title) => {
            //Find note with particular title
            var index = -1;
            console.log(title);
            for(var i=0;i<this.state.notes.length;i++){
                var current = this.state.notes[i];
                console.log(current.title);
                if(current.title === title){
                    index = i;
                }
            }
            console.log(index);
            if(index > -1){
                this.setState((state, props) => {
                    var newState = state["notes"].splice(index, 1);
                    return {"notes": newState}
                });
            }
        }
    }
    render(){
         var lstOfNotes = [];
         var notes = this.props.notes;

         for(var i=0;i<notes.length;i=i+1){
             var element = <Note title={notes[i].title}
                                text={notes[i].content}
                                deleteNote={this.deleteNote} />
            lstOfNotes.push(<li key={i+1}>{element}</li>);
         }

         return(
            <div className="notes-container">
                <h2 className="notes-heading">Notes</h2>
                <ul>
                    {lstOfNotes}
                </ul>
                <div className="create-note">
                    <h4>Add a new note : </h4>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="title" onChange={this.handleChange}
                                placeholder="Title" value={this.state.title}
                                className="create-note-title"></input>
                        <br></br>
                        <input type="text" name="content" onChange={this.handleChange}
                               placeholder="Content" value={this.state.content}
                               className="create-note-content"></input>
                        <button type="submit" className="submit-note">+</button>
                    </form>
                </div>
            </div>
         );
    }
}

export default Notes;
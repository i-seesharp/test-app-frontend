import React from "react";
import File from "./File.js";


class FileList extends React.Component{
    constructor(props){
        super(props);
        this.state = {files: []};
    }
    static getDerivedStateFromProps(props, state){
        return {files: props.files};
    }
    render(){
        var fileComponents = [];
        for(var i=0;i<this.state.files;i++){
            var element = <File name={this.state.files[i]} />
            fileComponents.push(<li key={i+1}>{element}</li>);
        }
        return(
            <div className="file-container">
                <ul>
                    {fileComponents}
                </ul>
            </div>
        );
    }
}
export default FileList;
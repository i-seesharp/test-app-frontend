import React from "react";

class File extends React.Component{
    render(){
        return <p className="file-name">{this.props.name}</p>
    }
}
export default File;
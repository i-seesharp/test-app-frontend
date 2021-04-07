import React from "react";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

import "../assets/codeEditorStyle.css"

class CodeEditor extends React.Component {
		
	constructor() {
		super();
		this.state = {
		  code: "print(\"Hello World\")",
		  output: ">> Hello World",
		  language: "python"
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleLanguage = this.handleLanguage.bind(this);
	}

    handleChange(value, event) {
		this.setState({ code: value});
    }
	
	handleLanguage(event) {
		this.setState({language: event.target.value})
	}
	
	render(){
		return (
			<div className="editor-container">
				<div className="editor-content">
					<Select
						className="languages"
						value={this.state.language}
						onChange={this.handleLanguage}
					>
						<MenuItem value={"python"}>Python</MenuItem>
						<MenuItem value={"c_cpp"}>C/C++</MenuItem>
						<MenuItem value={"javascript"}>JavaScript</MenuItem>
					</Select>
					<button className="Button" onClick={this.run}>Run</button>
				</div>
				<div className="inputOutput">
					<AceEditor 
					className="AceEditor" 
					width={"100%"} 
					height={"600px"} fontSize={20}
					value={this.state.code} 
					onChange={this.handleChange} 
					mode={this.state.language} 
					theme="monokai"/>
					<textarea 
					className="output" 
					readOnly
					value={this.state.output}/>
				</div>
			</div>
		);
	}
}

export default CodeEditor;
import React from "react";
import { Button, TextField } from "@material-ui/core";


class EditField extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            value: this.props.value
        }
    }

    enable(){
        this.setState({ disabled: false });
    }

    testEnter(key){
        if(key.key === "Enter") {
            this.setState({ disabled: true });
        }
    }

    updateValue(event){
        if(this.props.onChange){
            this.props.onChange(event);
            this.setState({})
        } else {
            this.setState({ value: event.target.value })
        }
    }

    render() {
        return (
            <div id={this.props.id} className={this.props.className}>
                <Button onClick={this.enable.bind(this)}
                        classes={this.props.ButtonClasses}
                >Edit</Button>
                <TextField disabled={this.state.disabled}
                           onKeyPress={this.testEnter.bind(this)}
                           onChange={this.updateValue.bind(this)}
                           label={this.props.label} value={(this.props.value !== undefined) ? this.props.value : this.state.value}
                           InputProps={this.props.InputProps}
                           InputLabelProps={this.props.InputLabelProps}
                />
            </div>
        );
    }

}

export default EditField;
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {Button, TextField} from "@material-ui/core";

class ProblemDialog extends React.Component{

    render() {
        return (
            <div>
                <Dialog open={this.props.open} onClose={this.props.onClose} maxWidth={"md"} fullWidth={true}>
                    <DialogContent>
                        <TextField label={"Problem Title"}
                                   fullWidth={true}
                                   value={this.props.title}
                                   onChange={this.props.titleChange}
                        />
                        <br/>
                        <br/>
                        <TextField label={"Problem Description"}
                                   multiline={true}
                                   rowsMax={6}
                                   rows={6}
                                   fullWidth={true}
                                   value={this.props.desc}
                                   onChange={this.props.descChange}
                        />
                        <br/>
                        <br/>
                        <TextField label={"Problem Id"}
                                   fullWidth={true}
                                   type={"number"}
                                   value={this.props.id}
                                   onChange={this.props.idChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.addProblem}>Finished</Button>
                        <Button onClick={this.props.cancel}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
export default ProblemDialog;
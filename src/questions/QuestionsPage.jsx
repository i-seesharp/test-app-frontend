import React from "react";
import "../assets/QuestionsPage.css";
import {Link} from "react-router-dom";
import {Button, TextField} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ProblemDialog from "./ProblemDialog";
import {ProblemFactory} from "./Problem";
import Typography from "@material-ui/core/Typography";

class QuestionsPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            addProblem: false,
            title: "",
            desc: "",
            id: "",
            questionName: ""
        }
    }

    updateName(event){
        this.setState({ questionName: event.target.value });
    }

    titleChange(e){
        this.setState({ title: e.target.value })
    }
    descChange(e){
        this.setState({ desc: e.target.value })
    }
    idChange(e){
        this.setState({ id: e.target.value })
    }

    openProblem(){
        this.setState({ addProblem: true });
    }

    closeProblem(){
        this.setState({ addProblem: false });
    }

    addProblem(){
        const newQues = ProblemFactory.newProblem({
            title: this.state.title,
            desc: this.state.desc,
            id: this.state.id,
        });
        this.props.addQuestion(newQues);
        this.setState({ addProblem: false })
    }

    render() {
        const valid = this.props.questions.filter(question => question.title.includes(this.state.questionName));
        const listQuestions = valid.map(question =>
            <li key={question.id} className={"questionElement"}>
                <Link to={`/questions/id=${question.id}`} className={"link"}>
                    <Card varient={"outlined"}>
                        <CardContent>
                            <Typography className={"questionTitle"} color={"textPrimary"}>
                                {question.title}
                            </Typography>
                            <Typography className={"questionID"} color={"textSecondary"}>
                                id: {question.id}
                            </Typography>
                            <Typography color={"textPrimary"}>
                                {question.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
            </li>
        );
        const addButton = this.props.activeUser.admin ?
            <Button id={"addQuestion"} onClick={this.openProblem.bind(this)}
                    classes={{ label: "add-text"}}
            >Add problem</Button> : <br/>;
        return (
            <div id={"backgroundQuestions"}>
                <div id={"header"}>
                    <Link to={"/"} className={"link"} ><p className={"back"}>Back</p></Link>
                    <p id={"headerText"}>Questions</p>
                </div>
                <div id={"questions"}>
                    <div className={"titleSection"}>
                        <div className={"title"}>Question Search</div>
                    </div>
                    <TextField value={this.state.questionName} label={"Question Search:"}
                               id={"questionQuery"}
                               InputProps={{ disableUnderline: true , classes: { input: "query-text" } }}
                               onChange={this.updateName.bind(this)}
                               InputLabelProps={{ classes: { root: "query-title" }}}
                    />

                    <div id={"questionsPane"}>
                        <div className={"titleSection"}>
                            <div className={"title"}>Questions</div>
                        </div>
                        <ul id={"questionsList"}>
                            {listQuestions}
                        </ul>
                    </div>
                    {addButton}
                </div>

                <ProblemDialog open={this.state.addProblem}
                               addProblem={this.addProblem.bind(this)}
                               cancel={this.closeProblem.bind(this)}
                               title={this.state.title}
                               titleChange={this.titleChange.bind(this)}
                               desc={this.state.desc}
                               descChange={this.descChange.bind(this)}
                               id={this.state.id}
                               idChange={this.idChange.bind(this)}
                />
            </div>
        )
    }
}
export default QuestionsPage;
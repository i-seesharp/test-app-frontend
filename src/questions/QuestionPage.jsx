import React from "react";
import "../assets/QuestionPage.css"
import {Link} from "react-router-dom";

class QuestionPage extends React.Component{

    render() {
        const question = this.props.questions.filter(
            question => question.id.toString() === this.props.match.params.id
        )[0]
        return (
            <div id={"backgroundQuestion"}>
                <div id={"headerQuestion"}>
                    <Link to={"/questions"} className={"link"} ><p className={"back"}>Back</p></Link>
                    <p id={"headerText"}>{question.title}</p>
                </div>
                <div id={"questionDescription"}>
                    <div className={"titleSection"}>
                        <div className={"title"}>Description</div>
                    </div>
                    <p className={"content"}>{question.description} </p>
                </div>
                <br/>
                <br/>
                <p>Please head over to the IDE from the menu, and solve this question there using its associated ID.</p>
            </div>
        );
    }
}
export default QuestionPage;
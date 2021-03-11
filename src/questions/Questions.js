import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import QuestionsPage from "./QuestionsPage";
import QuestionPage from "./QuestionPage";
import {UserFactory} from "./User";
import {ProblemFactory} from "./Problem";
import CommentSection from "../comments/CommentSection";
import "../assets/QuestionPage.css";

class Questions extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                ProblemFactory.newProblem({
                    title: "Palindrome Validator",
                    desc: "Determine if a given string is the same when read in the forward direction as well " +
                        "as the reverse direction, excluding spaces, punctuation and capitalization. Eg. \"A man, " +
                        "a plan, a canal, Panama\": true"
                }),
                ProblemFactory.newProblem({
                    title: "Pig Latin Translator",
                    desc: "Given a normal English sentence, translate it to Pig Latin. Eg. \"pig latin\": " +
                        "\"igplay atinlay\""
                }),
                ProblemFactory.newProblem({
                    title: "In Place Array Sorting",
                    desc: "Given an array of n integers, sort them in place in runtime O(nlogn)"
                })
            ],
            user: UserFactory.createUser({name: "Admin", admin: true})
        }
    }

    addQuestion(question){
        const newQues = this.state.questions;
        newQues.push(question);
        this.setState({ questions: newQues });
    }

    render(){
        return (
            <Router>
                <div>
                    {/*
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
            </ul>
          </nav>
          */}
                    <Switch>
                        <Route exact path={"/questions"} render={props => (
                            <div className="q-container">
                                <div className="questions-v1">
                                    <QuestionsPage {...props} questions={this.state.questions}
                                    addQuestion={this.addQuestion.bind(this)}
                                    activeUser={this.state.user}/>
                                </div>
                            </div>
                        )} />
                        <Route exact path={"/questions/id=:id"} render={(props) => (
                                <div className="q-container">
                                    <div className="questions-v1">
                                        <QuestionPage questions={this.state.questions}
                                                    {...props} />
                                    </div>
                                    <div className="questions-v2">
                                        <CommentSection />
                                    </div>
                                    
                                </div>
                                
                            )
                        }/>
                    </Switch>
                </div>
            </Router>
        );
    }

}

export default Questions;

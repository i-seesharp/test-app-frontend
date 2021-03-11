import React from "react";

import CurrentChat from "./components/CurrentChat.js";
import Login from "./login/Login.js";
import Signup from "./signup/Signup.js";
import ProjectList from "./projects/ProjectList.js";
import Statistics from "./stats-components/Statistics.js";
import Menu from "./Menu.js";
import CodeEditor from "./code-editor/CodeEditor.js";
import CommentSection from "./comments/CommentSection";
import Profile from "./profile/Profile";
import Questions from "./questions/Questions";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {messages} from "./sample-data/sample-messages.js";
import {conversations} from "./sample-data/sample-conversations.js";
import {projects} from "./sample-data/sample-projects.js";
import {files} from "./sample-data/sample-files.js";
import {donut, line} from "./sample-data/sample-stats.js";
import { leaderboard } from "./sample-data/sample-leaderboard.js";
import { problems } from "./sample-data/sample-problems.js";
import {notes} from "./sample-data/sample-notes.js";
import {views} from "./sample-data/sample-views.js";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {flip : true};
        this.changeLastMsg = (name, msg) => {
            conversations[name].lastMsg = msg.content;
            this.setState((state, props) => {
                return {flip: !state.flip};
            });
        }
    }
    render(){
        var statsData = {
            donut: donut,
            line: line,
            leaderboard: leaderboard,
            problems: problems,
            notes: notes,
            views: views
        };
        return(
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route exact path="/signup">
                        <Signup />
                    </Route>
                    <Route exact path="/message">
                        <Menu />
                        <CurrentChat name={"Ganesh"} 
                            conversations={conversations}
                            msg={messages}
                            changeLastMsg={this.changeLastMsg} />
                    </Route>
                    <Route exact path="/projects">
                        <Menu />
                        <ProjectList projects={projects} files={files}/>
                    </Route>
                    <Route exact path="/statistics">
                        <Menu />
                        <Statistics data={statsData} />
                    </Route>
                    <Route exact path="/ide">
                        <Menu />
                        <CodeEditor />
                    </Route>
                    <Route exact path="/profile">
                        <Menu />
                        <Profile />
                    </Route>
                    <Route exact path="/discussion">
                        <CommentSection />
                    </Route>
                    <Route path="/questions">
                        <Menu />
                        <Questions />
                    </Route>
                    <Route path="*">
                        <h1>Page Not Found!</h1>
                    </Route>
                </Switch>
            </Router>
        );
        /*
        return(
            <React.Fragment>
                <Header />
                <br></br>
                <br></br>
                <ConversationList conversations={conversations}/>
                <br></br>
                <br></br>
                <CurrentChat name={"Lisa Simpson"} msg={messages} />
            </React.Fragment>
        ); */
        /*
        return (<CurrentChat name={"Lisa Simpson"} 
        conversations={conversations}
        msg={messages} />); */
    }
    componentDidMount() {
        console.log("App has been mounted!");
    }
}
export default App;
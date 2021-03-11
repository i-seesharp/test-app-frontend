import React from "react";
import {Link} from "react-router-dom";
import "../assets/ProfilePage.css"
import {Button, TextField} from "@material-ui/core";
import EditField from "./EditField";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Post from "./Post";

class ProfilePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          newPostText: ""
        };
    }

    updateNewPost(event){
        this.setState({ newPostText: event.target.value });
    }

    addPost(){
        if(this.state.newPostText){
            this.props.addPost(this.state.newPostText);
            this.setState( { newPostText: "" });
        }
    }

    render() {
        // TODO: Make this use question object and when clicked go to that question
        const questionList = this.props.activeUser.questions.map(question =>
            <li key={question}>
                    <p className={"profileTextField"}>{question}</p>
            </li>
        );

        // TODO: Make this use some kind of project object so that users can do interaction with them
        const projectsList = this.props.activeUser.projects.map(project =>
            <li key={project} className={"projectsListProject"}>
                <p className={"profileTextField"}>{project}</p>
            </li>
        )

        const posts = this.props.activeUser.posts.map(post =>
            <li key={post}>
                <Post username={this.props.activeUser.username} text={post}/>
            </li>
        );

        return (
            <div className="profile-container">
            <div id={"backgroundProfile"}>
                <h1 id={"profileTitle"}>Profile Page</h1>
                <div id={"profileInfo"}>
                    <AccountCircleIcon color={"primary"}  id={"icon"}/>
                    <ul className={"userOpts"}>
                        <li id={"username"}> {this.props.activeUser.username} </li>
                        <li>
                            <Link to={"/"} className={"link"}> Logout </Link>
                        </li>
                    </ul>
                </div>
                <div id={"personalInfo"}>

                    <div className={"titleSection"}>
                        <p className={"profileText"}>Profile Data</p>
                    </div>
                    <EditField label={"Nickname:"} value={this.props.activeUser.nickname} id={"name"}
                               onChange={this.props.updateNickname}
                               InputProps={{ disableUnderline: true, classes: { input: "data-text" } }}
                               ButtonClasses={{ label: "data-label"}}
                               InputLabelProps={{ classes: { root: "data-title" }}}
                    />
                    <EditField label={"Age:"} value={this.props.activeUser.age} id={"age"}
                               onChange={this.props.updateAge}
                               InputProps={{ disableUnderline: true, classes: { input: "data-text" }}}
                               ButtonClasses={{ label: "data-label"}}
                               InputLabelProps={{ classes: { root: "data-title" }}}
                    />
                </div>

                <div id={"postsPane"}>
                    <div className={"titleSection"}>
                        <p className={"profileText"}>Posts</p>
                    </div>
                    <div id={"postHistory"}>
                        <div className={"titleSection"}>
                            <p className={"profileText"}>Post History</p>
                        </div>
                        <div id={"postListContainer"}>
                            <ul id={"postsList"}>{posts}</ul>
                        </div>
                    </div>

                    <div id={"newPost"}>
                        <div className={"titleSection"}>
                            <p className={"profileText"}>Create a New Post</p>
                        </div>
                        <TextField value={this.state.newPostText}
                                   onChange={this.updateNewPost.bind(this)}
                                   multiline={true}
                                   InputProps={{ disableUnderline: true }}
                                   id={"newPostField"}
                                   rows={8}
                                   fullWidth={true}
                                   variant={"outlined"}
                        />
                        <Button onClick={this.addPost.bind(this)} id={"addPost"}>
                            <AddCircleIcon fontSize={"large"}/>
                        </Button>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default ProfilePage;
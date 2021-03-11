import React from "react";
import ProfilePage from "./ProfilePage";
import {UserFactory} from "./User";

class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activeUser: UserFactory.createUser({
                questions: [
                    "Sample Question",
                    "Question the Second",
                    "just",
                    "A",
                    "Bunch",
                    "More",
                    "Questions"
                ],
                projects: ["Sample Project", "Sample Project 2"]
            })
        };
    }

    updatePosts(text){
        const params = this.state.activeUser.getParams();
        params.posts.push(text);
        this.setState({ activeUser: UserFactory.createUser(params) });
    }

    updateAge(event){
        const params = this.state.activeUser.getParams();
        params.age = event.target.value;
        this.setState({ activeUser: UserFactory.createUser(params) })
    }

    updateNickname(event){
        const params = this.state.activeUser.getParams();
        params.nickname = event.target.value;
        this.setState({ activeUser: UserFactory.createUser(params) })
    }

    render() {
        return (
                <div>
                    <ProfilePage {...this.props} activeUser={this.state.activeUser}
                                                    updateAge={this.updateAge.bind(this)}
                                                    updateNickname={this.updateNickname.bind(this)}
                                                    addPost={this.updatePosts.bind(this)}
                            />
                </div>
        );
    }


}

export default Profile;

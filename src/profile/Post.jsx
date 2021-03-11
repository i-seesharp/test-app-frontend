import React from "react";
import "../assets/Post.css"

class Post extends React.Component{
    render() {
        return(
            <div className={"post"}>
                <div className={"postHeader"}>
                    <p className={"username"}>{this.props.username}:</p>
                </div>
                <div>
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default Post;
import React from "react";
import { uid } from "react-uid";

import CommentCard from "./CommentCard"
import CommentSpoiler from "./CommentSpoiler"
import Commenter from "./Commenter"
import Comment from "./Comment"
import { Paper, TextField, Button,} from "@material-ui/core";

//IMPORTANT
//We should read from some json file, this is for the current user
//Also, we should use a user ID but i dont know is we made one so i just left it as is
const currentUser = "Tester";
const img_src = "../assets/logo512";
const comment = <span> The answer to this question is <CommentSpoiler comment={"SPOILER"}/></span>


class CommentSection extends React.Component {
	constructor(){
		super()
		this.state = {
			comments : [],
			comment : ""
		}
		this.addComment = this.addComment.bind(this)
		this.handleComment = this.handleComment.bind(this)
		
		let newCommenter = new Commenter("Daniel","../../public/logo512")
		let newComment = new Comment(newCommenter, comment)
		this.state.comments.push(newComment)
		
		newCommenter = new Commenter("Dev","../../public/logo512")
		newComment = new Comment(newCommenter, comment)
		this.state.comments.push(newComment)
		
		newCommenter = new Commenter("Nachi","../../public/logo512")
		newComment = new Comment(newCommenter, comment)
		this.state.comments.push(newComment)
	}
	
	addComment(event){
		const newCommenter = new Commenter(currentUser,img_src)
		const newComment = new Comment(newCommenter, this.state.comment)
		let copy = this.state.comments
		copy.push(newComment)
		this.setState({comments:copy})
		this.setState({comment:""})
	}
	
	handleComment(event){
		this.setState({comment:event.target.value})
	}
	
	render (){
		return (
			<div style={{width:"100%"}}>
				<div>
					<TextField  value={this.comment} 
					onChange={this.handleComment} 
					style={{width:"50%", marginLeft:"5%", whiteSpace: 'preWrap'}} 
					label="Add a comment" 
					multiline={true} />
					<Button style={{width:"10%"}} onClick={this.addComment} variant="contained" color="primary">
						Submit
					</Button>
				</div>
				<div>
					<Paper style={{ padding: "40px 20px" }} elevation={3}>
						{this.state.comments.map(
							comment => (
								<CommentCard 
								key={uid(comment)}
								comment={comment}
								/>
							)
						)}
					</Paper>
				</div>
			</div>
		)
	}
}

export default CommentSection;

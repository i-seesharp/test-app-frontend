import React from "react";
import { uid } from "react-uid";

import { Divider, Avatar, Grid, IconButton, Button, TextField } from "@material-ui/core";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ReplyCard from './ReplyCard'
import Reply from './Reply.js'
import Commenter from './Commenter'

const currentCommenter = "Tester";
const img_src = "../assets/logo512";

class CommentCard extends React.Component {
	constructor() {
		super();
		this.state = {
			comment : null,
			replies : [],
			reply: ""
		};
		this.like = this.like.bind(this);
		this.dislike = this.dislike.bind(this);
		this.showReplies = this.showReplies.bind(this)
		this.handleReply = this.handleReply.bind(this)
		this.addReply = this.addReply.bind(this)
	}
	
	handleReply(event){
		this.setState({ reply: event.target.value })
	}
	
	addReply(event){
		const newCommenter = new Commenter(currentCommenter, img_src)
		const newReply = new Reply(newCommenter, this.state.reply)
		this.state.comment.reply(newReply)
		this.setState({comment: this.state.comment})
	}
	
	like(event){
		let copy = this.state.comment
		copy.like(currentCommenter)
		this.setState({comment:copy})
	}
	
	dislike(event){
		let copy = this.state.comment
		copy.dislike(currentCommenter)
		this.setState({comment:copy})
	}
	
	showReplies(event){
		if (this.state.replies.length == 0){
			this.setState({replies:this.state.comment.replies})
		} else {
			this.setState({replies:[]})
		}
	}
	
	render (){
		const {comment} = this.props
		this.state.comment = comment
		return (
			<div>
				<div>
					<Grid container wrap="nowrap" spacing={2}>
					  <Grid item>
						<Avatar alt="Remy Sharp" src={this.state.comment.commenter.img_src} />
					  </Grid>
					  <Grid item xs zeroMinWidth>
						<h4 style={{ margin: 0, textAlign: "left" }}>{this.state.comment.commenter.userName}</h4>
						<p style={{ textAlign: "left", whiteSpace: 'pre-wrap' }}>
							{this.state.comment.comment}
						</p>
						<p style={{ textAlign: "left", color: "gray" }}>
							{this.state.comment.date_posted}
						</p>
					  </Grid>
					</Grid>
				</div>
				<div>
					<p style={{ textAlign: "left", color: "gray", whiteSpace: 'pre-wrap' }}>
						<IconButton onClick={this.like}>
							<ExpandLessIcon/>
						</IconButton>
						{this.state.comment.likes - this.state.comment.dislikes}
						<IconButton onClick={this.dislike}>
							<ExpandMoreIcon/>
						</IconButton>
						<Button style={{ textAlign: "center", color: "gray" }} onClick={this.showReplies}>
							{this.state.comment.replies.length} REPLIES
						</Button>
					</p>
				</div>
				<div>
				<TextField  value={this.reply} 
					onChange={this.handleReply} 
					style={{width:"50%", marginLeft:"5%", whiteSpace: 'preWrap'}} 
					label="Add a reply" 
					multiline={true} />
				<Button style={{ textAlign: "center", color: "gray" }} onClick={this.addReply}>
					REPLY
				</Button>
				</div>
				<div>
					{this.state.replies.map(
							reply => (
								<ReplyCard 
								key={uid(reply)} 
								comment={reply}/>
							)
						)}
				</div>
				<div>
					<Divider variant="fullWidth" style={{ margin: "30px 0" }} />
				</div>
			</div>
		)
	}
}

export default CommentCard;
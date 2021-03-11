import React from "react";

import { Avatar, Grid, IconButton } from "@material-ui/core";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


//IMPORTANT
//We should read from some json file, this is for the current user
//Also, we should use a user ID but i dont know is we made one so i just left it as is
const currentCommenter = "Tester";

class ReplyCard extends React.Component {
	constructor(props) {
		super(props);
		const {comment} = props;
		this.state = {
			comment : comment,
		};
		this.like = this.like.bind(this);
		this.dislike = this.dislike.bind(this);
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
	
	render (){
		
		return (
			<div style={{marginLeft:"10%", marginTop:"2%"}}>
				<div>
					<Grid container wrap="nowrap" spacing={2}>
					  <Grid item>
						<Avatar alt="Remy Sharp" src={this.state.comment.commenter.img_src} />
					  </Grid>
					  <Grid item xs zeroMinWidth>
						<h5 style={{ margin: 0, textAlign: "left" }}>{this.state.comment.commenter.userName}</h5>
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
					<p style={{ textAlign: "left", color: "gray", whiteSpace: 'preWrap' }}>
						<IconButton onClick={this.like}>
							<ExpandLessIcon/>
						</IconButton>
						{this.state.comment.likes - this.state.comment.dislikes}
						<IconButton onClick={this.dislike}>
							<ExpandMoreIcon/>
						</IconButton>
					</p>
				</div>
			</div>
		)
	}
}

export default ReplyCard;
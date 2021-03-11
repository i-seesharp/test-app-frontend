import React from "react";


class CommentSpoiler extends React.Component{
	constructor(){
		super()
		this.changeColor = this.changeColor.bind(this);
	}
	
	changeColor(event){
		if (event.target.style.backgroundColor === 'rgb(204, 204, 204)'){
			event.target.style.backgroundColor = 'black'
		} else {
			event.target.style.backgroundColor = 'rgb(204, 204, 204)'
		}
	}
	render (){
		const {comment} = this.props;
		return (<span style={{backgroundColor:'black', cursor: 'pointer'}} onClick={this.changeColor}>{comment}</span>)
	}
}

export default CommentSpoiler;
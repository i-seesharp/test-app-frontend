function getCurrentTime(){
	var current = new Date();
	let today = current.toLocaleString();
	return today;
}


export class Comment {
	constructor(commenter, comment){
		this.commenter = commenter;
		this.comment = comment;
		
		this.datePosted = getCurrentTime();
		
		this.likes = 0;
		this.dislikes = 0;
		this.edited = false;
		
		this.previousComments = [];
		
		this.replies = []
		
		this.editComment = this.editComment.bind(this);
		this.like = this.like.bind(this)
		this.dislike = this.dislike.bind(this)
		
		this.usersLiked = new Set()
		this.usersDisLiked = new Set()
	}
	
	editComment (newComment){
		this.previousComments.push(this.comment);
		this.comment = newComment;
		this.datePosted = getCurrentTime();
	}
	
	like(user){
		if (this.usersLiked.has(user)){
			this.usersLiked.delete(user)
			this.likes = this.likes - 1
		}
		else if (!this.usersLiked.has(user)){
			if (this.usersDisLiked.has(user)){
				this.usersDisLiked.delete(user)
				this.dislikes = this.dislikes - 1
			}
			this.usersLiked.add(user)
			this.likes = this.likes + 1;
		}
	}
	
	dislike(user){
		if (this.usersDisLiked.has(user)){
			this.usersDisLiked.delete(user)
			this.dislikes = this.dislikes - 1
		}
		else if (!this.usersDisLiked.has(user)){
			if (this.usersLiked.has(user)){
				this.usersLiked.delete(user)
				this.likes = this.likes - 1
			}
			this.usersDisLiked.add(user)
			this.dislikes = this.dislikes + 1;
		}
	}
	
	reply(reply){
		this.replies.push(reply)
	}
}

export default Comment;

function getCurrentTime(){
	var current = new Date();
	let today = current.toLocaleString();
	return today;
}

export class Reply {
	constructor(commenter, comment){
		this.commenter = commenter;
		this.comment = comment;
		
		this.datePosted = getCurrentTime();
		
		this.likes = 0;
		this.dislikes = 0;
				
		this.like = this.like.bind(this)
		this.dislike = this.dislike.bind(this)
		
		this.usersLiked = new Set()
		this.usersDisLiked = new Set()
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
}

export default Reply;
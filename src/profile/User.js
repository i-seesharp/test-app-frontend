class User{
    constructor() {
        this.id = null;
        this.username = null;
        this.age = null;
        this.elo = null;
        this.nickname = null;
        this.questionsSolved = null;
        this.questions = null;
        this.projects = null;
        this.posts = null;
    }

    getParams(){
        return {
            id: this.id,
            username: this.username,
            age: this.age,
            elo: this.elo,
            nickname: this.nickname,
            questionsSolved: this.questionsSolved,
            questions: this.questions,
            projects: this.projects,
            posts: this.posts
        };
    }
}

class UserBuilder{
    constructor() {
        this.user = new User();
    }

    setUsername(username){
        this.user.username = username;
        return this;
    }

    setId(id){
        this.user.id = id;
        return this;
    }

    setNickname(nickname){
        this.user.nickname = nickname;
        return this;
    }

    setAge(age){
        this.user.age = age;
        return this;
    }

    setElo(elo){
        this.user.elo = elo;
        return this;
    }

    setQuestionsSolved(solved){
        this.user.questionsSolved = solved;
        return this;
    }

    setQuestions(questions){
        this.user.questions = questions;
        return this;
    }

    setProjects(projects){
        this.user.projects = projects;
        return this;
    }

    setPosts(posts){
        this.user.posts = posts;
        return this;
    }

    getUser(){
        return this.user;
    }
}

export class UserFactory{
    static createUser(params){
        const validated = params ? params : {}
        const id = validated.id ? validated.id : Math.floor(Math.random() * 1000);
        const username = validated.username ? validated.username : "John Doe #" + id;
        const nickname = validated.nickname ? validated.nickname : "";
        const elo = validated.elo ? validated.elo : Math.floor(Math.random() * 500) + 750;
        const age = validated.age !== undefined ? validated.age : Math.floor(Math.random() * 20) + 18;
        const questions = validated.questions ? validated.questions : [];
        const questionsSolved = questions.length;
        const projects = validated.projects ? validated.projects : [];
        const posts = validated.posts ? validated.posts : [];

        return new UserBuilder().setId(id).setUsername(username).setNickname(nickname)
            .setAge(age).setElo(elo).setQuestions(questions).setQuestionsSolved(questionsSolved)
            .setProjects(projects).setPosts(posts).getUser();
    }
}

export default User;
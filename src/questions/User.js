class User{
    constructor() {
        this.name = null;
        this.id = null;
        this.admin = null;
    }
}

class UserBuilder{
    constructor() {
        this.user = new User();
    }

    setName(name){
        this.user.name = name;
        return this;
    }

    setId(id){
        this.user.id = id;
        return this;
    }

    setAdmin(admin){
        this.user.admin = admin;
        return this;
    }

    getUser(){
        return this.user;
    }
}

export class UserFactory{
    static createUser(params){
        const passedParams = params ? params : {};
        const name = passedParams.name ? passedParams.name : "Jane Doe";
        const id = passedParams.id ? passedParams.id : Math.floor(Math.random() * 1000);
        const admin = !!passedParams.admin;
        return new UserBuilder().setName(name).setId(id).setAdmin(admin).getUser();
    }
}

export default User;
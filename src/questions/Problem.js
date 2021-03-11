class Problem{
    constructor() {
        this.title = null;
        this.description = null;
        this.id = null;
    }
}

class ProblemBuilder{
    constructor() {
        this.problem = new Problem();
    }

    setTitle(title){
        this.problem.title = title;
        return this;
    }

    setDescription(desc){
        this.problem.description = desc;
        return this;
    }

    setId(id){
        this.problem.id = id;
        return this;
    }

    getProblem(){
        return this.problem;
    }
}

export class ProblemFactory{
    static newProblem(params){
        const title = params.title ? params.title : "No Title";
        const desc = params.desc ? params.desc : "No Description";
        const id = params.id ? params.id : Math.floor(Math.random() * 1000);

        return new ProblemBuilder().setTitle(title).setDescription(desc).setId(id).getProblem();
    }
}
export default Problem;
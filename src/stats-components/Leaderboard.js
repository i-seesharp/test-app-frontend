import React from "react";
import Friend from "./Friend.js";

class Leaderboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {"mode": "light"};
    }
    render(){
        var lstOfFriends = [];
        var leaderboard = this.props.leaderboard;
        var names = leaderboard.names;
        var solved = leaderboard.solved;
        var ratings = leaderboard.ratings;

        for(var i=0;i<leaderboard.names.length;i=i+1){
            var element =   <Friend key={i+1}
                                name={names[i]}
                                rating={ratings[i]}
                                solved={solved[i]}></Friend>
            lstOfFriends.push(element);
        }
        return(
            <React.Fragment>
                <h2 className="leaderboard-heading">Leaderboard</h2>
                <div className="leaderboard-container">
                    {lstOfFriends}
                </div>
            </React.Fragment>
            

        );
    }
}

export default Leaderboard;
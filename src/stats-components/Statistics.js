import React from "react";
import Graphs from "./Graphs.js";
import Leaderboard from "./Leaderboard.js";
import Solved from "./Solved.js";
import Notes from "./Notes.js";
import ViewCounter from "./ViewCounter.js";

class Statistics extends React.Component{
    render(){
        return(
            <div className="top-stats">
                <div className="stats-container">
                    <header className="chat-header">
                        <h1><i className="fas fa-smile"></i> Statistics</h1>
                    </header>
                    <div className="graphs">
                        <Graphs donutData={this.props.data.donut} 
                            lineData={this.props.data.line} />
                    </div>
                    <div className="numbers-container">
                        <div className="leaderboard">
                            <Leaderboard leaderboard={this.props.data.leaderboard} />
                        </div>
                        <div className="problems-solved">
                            <Solved problems={this.props.data.problems} />
                        </div>
                        <div className="notes">
                            <Notes notes={this.props.data.notes} />
                        </div>
                        <div className="view-counter">
                            <ViewCounter views={this.props.data.views} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Statistics;
import React from "react";
import {Doughnut, Line} from "react-chartjs-2";

class Graphs extends React.Component{
    constructor(props){
        super(props);
        this.donutReference = React.createRef();
    }
    render(){
        console.log(this.props.donutData);
        return(
            <React.Fragment>
                <div className="donut-graph">
                    <Doughnut 
                    data={this.props.donutData} /> 
                </div>
                <div className="line-graph">
                    <Line data={this.props.lineData} />
                </div>
            </React.Fragment>
                
        );
    }
}

export default Graphs;
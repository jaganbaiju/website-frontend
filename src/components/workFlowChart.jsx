import React from "react";
import "./workFlowChart.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Step from "./step";



function WorkFlowChart() {
    return(
        <div className="flow-chart">
            <div className="chart ">
                <div className="container">
                    <div className="row">
                        <Step />
                        <Step />
                        <Step />
                        <Step />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkFlowChart;
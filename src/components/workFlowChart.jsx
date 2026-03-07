import {React, useEffect, useState} from "react";
import "./workFlowChart.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Step from "./step";
import DetailsGIF1 from "../assets/gif/detailss.gif"
import DetailsGIF2 from "../assets/gif/pencil.gif"
import DetailsGIF3 from "../assets/gif/tick.gif"
import DetailsGIF4 from "../assets/gif/truck.gif"


function WorkFlowChart() {

    const [stepData, setStepData] = useState([
        {
            "title": "Collect Details",
            "gif": DetailsGIF1
        },
        {
            "title": "Design",
            "gif": DetailsGIF2
        },
        {
            "title": "Approve & Print",
            "gif": DetailsGIF3
        },
        {
            "title": "Fast Delivery",
            "gif": DetailsGIF4
        }
    ])

    // console.log(stepData);
    
    return(
        <div className="flow-chart">
            <div className="chart ">
                <div className="container">
                    <div className="row">

                        {
                            stepData.map((item) => {
                                return (
                                    <Step key={item.title}
                                        title={item.title}
                                        gif={item.gif}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkFlowChart;
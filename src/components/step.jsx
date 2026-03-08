// import React from "react";
import "./step.css"



function Step(props) {
    return (
        <div className="step-div col-6 col-md-3">
            <div className="step-card">
                <img src={props.gif} alt="details" width={110} height={110}/>
                <p className="step-name">{props.title}</p>
            </div>
        </div>
    );
}

export default Step;
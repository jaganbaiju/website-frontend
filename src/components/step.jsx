import React from "react";
import "./step.css"
import DetailsGIF from "../assets/gif/detailss.gif"


function Step() {
    return (
        <div className="step-div col-6 col-md-3">
            <div className="step-card">
                <img src={DetailsGIF} alt="details" width={110} height={110}/>
                <p className="step-name">Collect Details</p>
            </div>
        </div>
    );
}

export default Step;
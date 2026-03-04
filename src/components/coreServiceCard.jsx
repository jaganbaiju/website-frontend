import React from "react";
import "./coreServiceCard.css"
import Digalprint from "../assets/images/digital-printing.png"



function CoreServiceCard() {
    return (
        <div className="core-service-card col-6 col-md-4">
            <div className="sub-core-card text-center">
                <div className="icon-div">
                    <img src={Digalprint} alt="digitel print" />
                </div>
                <h4 className="core-card-title">
                    Digital Printing
                </h4>
                <p className="core-card-para">
                    Creative designs that build strong brand identity and visual impact.
                </p>
            </div>
        </div>
    );
}


export default CoreServiceCard;
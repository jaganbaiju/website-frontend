// import React from "react";
import "./coreServiceCard.css"



function CoreServiceCard(props) {
    return (
        <div className="core-service-card col-6 col-md-4">
            <div className="sub-core-card text-center">
                <div className="icon-div">
                    <img src={props.icon} alt="digitel print" width={25} height={20} />
                </div>
                <h4 className="core-card-title">
                    {/* Digital Printing */}
                    {props.title}
                </h4>
                <p className="core-card-para">
                    {/* Creative designs that build strong brand identity and visual impact. */}
                    {props.desc}
                </p>
            </div>
        </div>
    );
}


export default CoreServiceCard;
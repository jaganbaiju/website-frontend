import React from "react";
import "./team.css"
import Team from "../assets/images/team.png"


function TeamCards() {
    return(
        <div className="team-card-div">
            <div className="team-card">
                <div className="team-card-head">
                    <img src={Team} alt="img" className="team-img" />
                </div>
                <div className="team-card-body">
                    <h5 className="team-member-name">
                        Demo
                    </h5>
                    <p className="position">
                        Developer
                    </p>
                </div>
            </div>
        </div>
    );
}


export default TeamCards;
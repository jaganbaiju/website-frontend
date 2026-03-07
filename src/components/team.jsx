import React from "react";
import "./team.css"
import Team from "../assets/images/team.png"


function TeamCards(props) {
    return(
        <div className="team-card-div">
            <div className="team-card">
                <div className="team-card-head">
                    <img src={props.image} alt="img" className="team-img" />
                </div>
                <div className="team-card-body">
                    <h5 className="team-member-name">
                        {props.name}
                    </h5>
                    <p className="position">
                        {props.positon}
                    </p>
                </div>
            </div>
        </div>
    );
}


export default TeamCards;
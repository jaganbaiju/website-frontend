import React from "react";
import "./ourTeam.css"
import OurHeadCarousel from "./ourHeadCarousel";
import TeamCards from "./team";


function OurTeam() {
    return (
        <div className="our-team">
            <div className="our-team-sub">
                <div className="head-carousel">
                    <OurHeadCarousel />
                </div>
                <div className="meet-our-team-div">
                    <h3 className="meet-our-team pt-5">
                        Meet Our Team
                    </h3>
                    <div className="team-slider">
                        <div className="team-track">
                            <TeamCards />
                            <TeamCards />
                            <TeamCards />
                            <TeamCards />

                        
                            <TeamCards />
                            <TeamCards />
                            <TeamCards />
                            <TeamCards />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default OurTeam;
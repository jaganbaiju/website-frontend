// import React from "react";
import { useState, useEffect } from "react";
import "./ourTeam.css"
import OurHeadCarousel from "./ourHeadCarousel";
import TeamCards from "./team";


function OurTeam() {

    // const BASE_URL = "https://website-backend-api-sz6i.onrender.com/";
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        fetch("https://website-backend-api-sz6i.onrender.com/api/team/")
            .then((res) => res.json())
            .then((data) => {
                setTeamData(data.data);
            })
            .catch((err) => console.log(err));
    }, []);

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

                            {
                                teamData?.map((item) => {

                                    const backendUrl = item?.image;
                                const filePath = backendUrl?.replace("/https%3A/ik.imagekit.io/siczeomnnq/", "https://ik.imagekit.io/siczeomnnq/");


                                    return (
                                        <TeamCards
                                            key={item.id}
                                            image={`${filePath}`}
                                            name={item.name}
                                            positon={item.positon}
                                        />
                                    );
                                })
                            }

                            {/* dupllicate for smooth flow */}
                            {
                                teamData.map((item) => {

                                    const backendUrl = item?.image;
                                const filePath = backendUrl?.replace("/https%3A/ik.imagekit.io/siczeomnnq/", "https://ik.imagekit.io/siczeomnnq/");

                                        
                                    return (
                                        <TeamCards
                                            key={item.id}
                                            image={`${filePath}`}
                                            name={item.name}
                                            positon={item.positon}
                                        />
                                    );
                                })
                            }


                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default OurTeam;
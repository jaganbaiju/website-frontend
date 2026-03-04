import React from "react";
import "./servicesCard.css"
import DMImage from "../assets/images/DM.png";
import { FaArrowRight } from "react-icons/fa";



function ServiceCard() {
    return (
        <div className="serivce-card col-sm-6 col-md-3 g-3">
            <div className="card" style={{backgroundImage:`url(${DMImage})`}}>
                <div className="service-card-body">
                    <h3 className="service-card-title">
                        DIGITAL MARKETING
                    </h3>
                    <p className="service-card-desc">
                        REACH YOUR TARGET AUDIENCE
                    </p>
                    <a href="#" className="service-card-link">
                        LEARN MORE <FaArrowRight color="#FCD104" />
                    </a>
                </div>
            </div>
        </div>

    );
}

export default ServiceCard;
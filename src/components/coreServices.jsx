import React from "react";
import "./coreServices.css"
import CoreServiceCard from "./coreServiceCard";


function Coreservices() {
    return (
        <div className="core-service-div">
            <div className="core-service-sub-div">
                <h1 className="core-service-head text-center">
                    OUR CORE SERVICES
                </h1>
                <div className="container pt-4 pb-4">
                    <div className="row g-5">
                        <CoreServiceCard />
                        <CoreServiceCard />
                        <CoreServiceCard />
                        <CoreServiceCard />
                        <CoreServiceCard />
                        <CoreServiceCard />
                        <CoreServiceCard />
                        <CoreServiceCard />
                        <CoreServiceCard />
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Coreservices;
// import React from "react";
import { useState, useEffect } from "react";
import "./coreServices.css"
import CoreServiceCard from "./coreServiceCard";


function Coreservices() {

    // const BASE_URL = "https://website-backend-api-sz6i.onrender.com";
    const [coreCardData, setCoreCardData] = useState([]);

    useEffect(() => {
        fetch("https://website-backend-api-sz6i.onrender.com/api/core_services/")
        // fetch("http://127.0.0.1:8000/api/core_services/")
            .then((res) => res.json())
            .then((data) => {
                setCoreCardData(data.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="core-service-div">
            <div className="core-service-sub-div">
                <h1 className="core-service-head text-center">
                    OUR CORE SERVICES
                </h1>
                <div className="container pt-4 pb-4">
                    <div className="row g-5">

                        {
                            coreCardData?.map((item) => {

                                const backendUrl = item?.icon;
                                const filePath = backendUrl?.replace("/https%3A/ik.imagekit.io/siczeomnnq/", "https://ik.imagekit.io/siczeomnnq/");


                                return (
                                    <CoreServiceCard
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        icon={`${filePath}`}
                                        desc={item.desc}
                                    />
                                );
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}



export default Coreservices;
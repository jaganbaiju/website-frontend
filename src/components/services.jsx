import { React, useEffect, useState } from "react";
import './services.css'
import { motion } from "framer-motion";
import ServiceCard from "./servicesCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Services() {

    const BASE_URL = "https://website-backend-api-sz6i.onrender.com/";
    const [serivcesData, setServicesData] = useState([])

    useEffect(() => {
        fetch("https://website-backend-api-sz6i.onrender.com/api/our_services/")
            .then((res) => res.json())
            .then((data) => {
                setServicesData(data.data);
            })
            .catch((err) => console.log(err));
    }, []);

    // console.log(serivcesData);

    return (
        <div className="services-div">
            <div className="services-sub-div">
                <motion.h4 className="service-head"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Deliver Solution
                </motion.h4>
                <p className="service-para">
                    We craft custom solutions to help you achieve your specific marketing goals and objectives.
                </p>
                <div className="service-card-div">
                    <div className="row">

                        {
                            serivcesData?.map((cardData) => {
                                return (
                                    <ServiceCard
                                        id={cardData.id}
                                        bgImg={`${BASE_URL}${cardData.background_image}`}
                                        title={cardData.heading}
                                        desc={cardData.desc}
                                        link={cardData.link}
                                        key={cardData.id}
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

export default Services;
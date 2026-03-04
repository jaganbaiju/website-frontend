import React from "react";
import './services.css'
import { motion } from "framer-motion";
import ServiceCard from "./servicesCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Services() {
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
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
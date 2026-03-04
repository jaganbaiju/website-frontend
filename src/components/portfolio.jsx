import React from "react";
import "./portfolio.css";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaArrowRight } from "react-icons/fa";
import Works from "./works";
import WorkFLow from "./workFlow";



function Portfolio() {
    return(
        <div className="portfolio-div">
            <div className="prtfo-sub-div">
                <p className="prtfo-para">
                    From strategy to stunning visuals, discover the services that empower our clients’ success. Explore our portfolio of successful Projects.
                </p>
                <a href="#" className="prtfo-link">
                    PORTFOLIO <FaArrowRight color="#FCD104" />
                </a>
                <div className="prtfo-works">
                    <Works />
                </div>
                <div className="work-flow-div">
                    <WorkFLow />
                </div>
            </div>
        </div>
    );
}


export default Portfolio;
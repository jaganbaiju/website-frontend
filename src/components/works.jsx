import React from "react";
import "./works.css"
import DMImage from "../assets/images/DM.png";
import DRNKimage from "../assets/images/drink.png"
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";


function Works() {
    return (
        <div className="works row g-3">
            <div className="column col-12 col-md-4">
                <motion.div 
                    className="work-card card-1 mb-3" 
                    style={{ backgroundImage: `url(${DMImage})` }}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="service-card-body">
                        <h3 className="service-card-title">
                            DIGITAL MARKETING
                        </h3>
                        <p className="service-card-desc wrk-desc">
                            REACH YOUR TARGET AUDIENCE
                        </p>
                        <a href="#" className="service-card-link">
                            LEARN MORE <FaArrowRight color="#FCD104" />
                        </a>
                    </div>
                </motion.div>
                <motion.div 
                    className="work-card card-2" 
                    style={{ backgroundImage: `url(${DRNKimage})` }}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="service-card-body">
                        <h3 className="service-card-title">
                            DIGITAL MARKETING
                        </h3>
                        <p className="service-card-desc wrk-desc">
                            REACH YOUR TARGET AUDIENCE
                        </p>
                        <a href="#" className="service-card-link">
                            LEARN MORE <FaArrowRight color="#FCD104" />
                        </a>
                    </div>
                </motion.div>
            </div>
            <div className="column col-12 col-md-4 ">
                <motion.div 
                    className="work-card card-3 mb-3" 
                    style={{ backgroundImage: `url(${DMImage})` }}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="service-card-body">
                        <h3 className="service-card-title">
                            DIGITAL MARKETING
                        </h3>
                        <p className="service-card-desc wrk-desc">
                            REACH YOUR TARGET AUDIENCE
                        </p>
                        <a href="#" className="service-card-link">
                            LEARN MORE <FaArrowRight color="#FCD104" />
                        </a>
                    </div>
                </motion.div>
                <motion.div 
                    className="work-card card-4" 
                    style={{ backgroundImage: `url(${DRNKimage})` }}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="service-card-body">
                        <h3 className="service-card-title">
                            DIGITAL MARKETING
                        </h3>
                        <p className="service-card-desc wrk-desc">
                            REACH YOUR TARGET AUDIENCE
                        </p>
                        <a href="#" className="service-card-link">
                            LEARN MORE <FaArrowRight color="#FCD104" />
                        </a>
                    </div>
                </motion.div>
            </div>
            <div className="column col-12 col-md-4">
                <motion.div 
                    className="work-card card-5 mb-3" 
                    style={{ backgroundImage: `url(${DMImage})` }}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="service-card-body">
                        <h3 className="service-card-title">
                            DIGITAL MARKETING
                        </h3>
                        <p className="service-card-desc wrk-desc">
                            REACH YOUR TARGET AUDIENCE
                        </p>
                        <a href="#" className="service-card-link">
                            LEARN MORE <FaArrowRight color="#FCD104" />
                        </a>
                    </div>
                </motion.div>
                <motion.div 
                    className="work-card card-6" 
                    style={{ backgroundImage: `url(${DRNKimage})` }}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="service-card-body">
                        <h3 className="service-card-title">
                            DIGITAL MARKETING
                        </h3>
                        <p className="service-card-desc wrk-desc">
                            REACH YOUR TARGET AUDIENCE
                        </p>
                        <a href="#" className="service-card-link">
                            LEARN MORE <FaArrowRight color="#FCD104" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}


export default Works;
import React from "react";
import "./client.css"
import Review from "./review";
import { motion } from "framer-motion";

function Client() {
    return(
        <div className="client-div">
            <div className="client">
                <motion.h5 className="client-head"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.1, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Client
                </motion.h5>
                <motion.h4 className="client-review"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Reviews
                </motion.h4>

                <div className="review-slider">
                    <div className="review-track">
                        <Review />
                        <Review />
                        <Review />
                        <Review /> 

                        <Review />                        
                        <Review />                        
                        <Review />                        
                        <Review />                        

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Client;
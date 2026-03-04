import React from "react";
import './heroPage.css';
import { motion } from "framer-motion";
import NavaBar from "./navBar";


function HeroPage() {
    return (
        <div className="hero-page">
            <NavaBar />
            <div>
                <motion.h3 className="sub-heading"
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    PRINTING & BRANDING SOLUTION
                </motion.h3>
                <motion.h1 className="main-heading"
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    IN UAE
                </motion.h1>
                <p className="description">
                    We craft impactful Printing works , advertising , branding & digital marketing strategies to grow your brand and achieve measurable success!
                </p>
            </div>
        </div>
    );
}


export default HeroPage;
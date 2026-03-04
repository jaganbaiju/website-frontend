import React from "react";
import "./about.css"
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function AboutUs() {
    return (
        <div className="about-div">
            <div className="about p-3">
                <h5 className="abt-heading">ABOUT US</h5>
                <div className="row">
                    <motion.div className="col-md-4 col-lg-3"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <h1 className="abt-sub-head">
                            CREATIVE AGENCY
                        </h1>
                    </motion.div>
                    <motion.div className="col-md-8 col-lg-9"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <p className="abt-para">
                            Nunc lorem. turpis convallis. Praesent elit vitae Morbi risus id Lorem Vestibulum placerat ipsum facilisis facilisis massa nibh dignissim, faucibus laoreet In at non eget Donec elit maximus consectetur nulla, sodales. vehicula, amet, dui.
                        </p>
                        <a href="#" className="abt-read-more">
                            Read More
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
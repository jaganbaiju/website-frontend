import { React, useEffect, useState } from "react";
import "./works.css"
import DMImage from "../assets/images/DM.png";
import DRNKimage from "../assets/images/drink.png"
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";


function Works() {

    const BASE_URL = "http://127.0.0.1:8000";
    const [imgCardData, setImgCardData] = useState([])
    const [vdoCardData, setVdoCardData] = useState([])


    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/portfolio/")
            .then((res) => res.json())
            .then((data) => {
                setImgCardData(data.data.img_portfolio);
                setVdoCardData(data.data.vdo_portfolio);
            })
            .catch((err) => console.log(err));
    }, []);

    // console.log(imgCardData);
    // console.log(vdoCardData);

    const [
        imgCard1,
        imgCard2,
        imgCard3,
        imgCard4
    ] = imgCardData;

    const [
        vdoCard1,
        vdoCard2
    ] = vdoCardData;

    // console.log(imgCard1);

    return (
        <div className="works row g-3">
            <div className="column col-12 col-md-4">
                <motion.div
                    className="work-card card-1 mb-3"
                    style={{ backgroundImage: `url(${BASE_URL}${imgCard1?.background_image})` }}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="service-card-body">
                        <h3 className="service-card-title">
                            {/* DIGITAL MARKETING */}
                            {imgCard1?.title}
                        </h3>
                        <p className="service-card-desc wrk-desc">
                            {/* REACH YOUR TARGET AUDIENCE */}
                            {imgCard1?.desc}
                        </p>
                        <a href="#" className="service-card-link">
                            {imgCard1?.link} <FaArrowRight color="#FCD104" />
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    className="work-card card-2"
                    style={{ backgroundImage: `url(${BASE_URL}${imgCard2?.background_image})` }}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="service-card-body">
                        <h3 className="service-card-title">
                            {/* DIGITAL MARKETING */}
                            {imgCard2?.title}
                        </h3>
                        <p className="service-card-desc wrk-desc">
                            {/* REACH YOUR TARGET AUDIENCE */}
                            {imgCard2?.desc}
                        </p>
                        <a href="#" className="service-card-link">
                            {imgCard2?.link} <FaArrowRight color="#FCD104" />
                        </a>
                    </div>
                </motion.div>
            </div>
            <div className="column col-12 col-md-4 ">
                <motion.div
                    className="work-card card-3 mb-3"
                    style={{ backgroundImage: `url(${BASE_URL}${imgCard3?.background_image})` }}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="service-card-body">
                        <h3 className="service-card-title">
                            {/* DIGITAL MARKETING */}
                            {imgCard3?.title}
                        </h3>
                        <p className="service-card-desc wrk-desc">
                            {/* REACH YOUR TARGET AUDIENCE */}
                            {imgCard3?.desc}
                        </p>
                        <a href="#" className="service-card-link">
                            {imgCard3?.link} <FaArrowRight color="#FCD104" />
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    className="work-card card-4"
                    style={{ backgroundImage: `url(${BASE_URL}${imgCard4?.background_image})` }}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="service-card-body">
                        <h3 className="service-card-title">
                            {/* DIGITAL MARKETING */}
                            {imgCard4?.title}
                        </h3>
                        <p className="service-card-desc wrk-desc">
                            {/* REACH YOUR TARGET AUDIENCE */}
                            {imgCard4?.desc}
                        </p>
                        <a href="#" className="service-card-link">
                            {imgCard4?.link} <FaArrowRight color="#FCD104" />
                        </a>
                    </div>
                </motion.div>
            </div>
            <div className="column col-12 col-md-4">
                <motion.div
                    className="work-card card-5 mb-3 new-work-card"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                >   

                    {vdoCard2?.background_video && (
                        <video
                            className="work-card-video"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                        >
                            <source
                                src={`${BASE_URL}${vdoCard1?.background_video}`}
                                type="video/mp4"
                            />
                        </video>
                    )}

                    <div className="service-card-body new-service-card-body">
                        <h3 className="service-card-title">
                            {/* DIGITAL MARKETING */}
                            {vdoCard1?.title}
                        </h3>
                        <p className="service-card-desc wrk-desc">
                            {/* REACH YOUR TARGET AUDIENCE */}
                            {vdoCard1?.desc}
                        </p>
                        <a href="#" className="service-card-link">
                            {vdoCard1?.link} <FaArrowRight color="#FCD104" />
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    className="work-card card-6 new-work-card"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                >

                    {vdoCard2?.background_video && (
                        <video
                            className="work-card-video"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                        >
                            <source
                                src={`${BASE_URL}${vdoCard2?.background_video}`}
                                type="video/mp4"
                            />
                        </video>
                    )}


                    <div className="service-card-body new-service-card-body">
                        <h3 className="service-card-title">
                            {/* DIGITAL MARKETING */}
                            {vdoCard2?.title}
                        </h3>
                        <p className="service-card-desc wrk-desc">
                            {/* REACH YOUR TARGET AUDIENCE */}
                            {vdoCard2?.desc}
                        </p>
                        <a href="#" className="service-card-link">
                            {vdoCard2?.link} <FaArrowRight color="#FCD104" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}


export default Works;
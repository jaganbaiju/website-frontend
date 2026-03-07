import './heroPage.css';
import { motion } from "framer-motion";
import NavaBar from "./navBar";
import HeroImg from "../assets/images/Hero-BG.png";
import { useEffect, useState } from "react";
import axios from "axios";


function HeroPage() {
    const BASE_URL = "https://website-backend-api-sz6i.onrender.com";
    const [heroData, setHeroData] = useState(null);

    useEffect(() => {
        fetch("https://website-backend-api-sz6i.onrender.com/api/hero_page/")
            .then((response) => response.json())
            .then((data) => {
                setHeroData(data.data);
            })
            .catch((error) => console.error(error));
    }, []);

    console.log(heroData);

    // if (!heroData) {
    //     return <p>Loading..</p>;
    // }

    return (
        <div className="hero-page"
            style={{
                backgroundImage:
                    `linear-gradient(to bottom,transparent 60%,var(--background-color) 100%), url(${BASE_URL}${heroData.background_image})`
            }}
        >
            <NavaBar />
            <div>
                <motion.h3 className="sub-heading"
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {/* PRINTING & BRANDING SOLUTION */}
                    {heroData?.sub_heading}
                </motion.h3>
                <motion.h1 className="main-heading"
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {/* IN UAE */}
                    {heroData?.main_heading}
                </motion.h1>
                <p className="description">
                    {/* We craft impactful Printing works , advertising , branding & digital marketing strategies to grow your brand and achieve measurable success! */}
                    {heroData?.description}
                </p>
            </div>
        </div >
    );
}


export default HeroPage;
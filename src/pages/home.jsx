import React from 'react';
import { Link } from "react-router-dom";
import './home.css'
import { Helmet } from "react-helmet";
import HeroPage from '../components/heroPage';
import Services from '../components/services';
import AboutUs from '../components/aboutUs';
import Portfolio from '../components/portfolio';
import WorkFlowChart from '../components/workFlowChart';
import Coreservices from '../components/coreServices';
import WeProvided from '../components/weProvided';
import OurTeam from '../components/ourTeam';


function Home() {
    return (
        <div className='home-page'>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <HeroPage />
            <Services />
            <AboutUs />
            <Portfolio />
            <WorkFlowChart />
            <Coreservices />
            <WeProvided />
            <OurTeam />
        </div>
    );
}

export default Home;
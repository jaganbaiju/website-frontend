import React from "react";
import "./creative.css";
import NumberIncrementList from "./numberIncrement";
import Poster from "./poster";


function Creative() {
    return(
        <div className="creative-div">
            <div className="creative">
                <div className="row">
                    <NumberIncrementList />
                    <NumberIncrementList />
                    <NumberIncrementList />
                    <NumberIncrementList />
                </div>
            </div>
            <div className="creative-sub">
                <h1 className="creative-head">
                    CREAVTIVE
                </h1>
                <div className="poster-slider">
                    <div className="poster-track">
                        <Poster />
                        <Poster />
                        <Poster />
                        <Poster />
                        
                        <Poster />
                        <Poster />
                        <Poster />
                        <Poster />
                        {/* <Poster /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Creative;
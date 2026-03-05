import React from "react";
import "./poster.css";
import PosterImg from "../assets/images/poster-1.png";


function Poster() {
    return(
        <div className="poster-card-div col-md-3">
            <div className="poster-card">
                <img src={PosterImg} alt="img" className="poster-img" />
            </div>
        </div>
    );
}

export default  Poster;
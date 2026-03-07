import React from "react";
import "./poster.css";
import PosterImg from "../assets/images/poster-1.png";


function Poster(props) {
    return(
        <div className="poster-card-div col-md-3">
            <div className="poster-card">
                <img src={props.img} alt="img" className="poster-img" />
            </div>
        </div>
    );
}

export default  Poster;
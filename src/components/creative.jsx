import {React, useState, useEffect} from "react";
import "./creative.css";
import NumberIncrementList from "./numberIncrement";
import Poster from "./poster";


function Creative() {

    const BASE_URL = "https://website-backend-api-sz6i.onrender.com/";
    const [numData, setNumData] = useState([
        {
            "title": "PROJECTS",
            "num": 5000
        },
        {
            "title": "CLIENTS",
            "num": 500
        },
        {
            "title": "COUNTRIES",
            "num": 2
        },
        {
            "title": "CREATIVES",
            "num": 10000
        }
    ]);

    const [posterImages, setPosterImages] = useState([]);

    useEffect(() => {
        fetch("https://website-backend-api-sz6i.onrender.com/api/posters/")
            .then((res) => res.json())
            .then((data) => {
                setPosterImages(data.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return(
        <div className="creative-div">
            <div className="creative">
                <div className="row">

                    {
                        numData.map((item) => {
                            return (
                                <NumberIncrementList 
                                    key={item.title}
                                    title={item.title}
                                    num={item.num}
                                />
                            );
                        })
                    }

                </div>
            </div>
            <div className="creative-sub">
                <h1 className="creative-head">
                    CREAVTIVE
                </h1>
                <div className="poster-slider">
                    <div className="poster-track">

                        {
                            posterImages.map((item) => {
                                return (
                                    <Poster 
                                        key={item.id}
                                        img={`${BASE_URL}${item.poster}`}
                                    />
                                );
                            })
                        }

                        {
                            posterImages.map((item) => {
                                return (
                                    <Poster 
                                        key={item.id}
                                        img={`${BASE_URL}${item.poster}`}
                                    />
                                );
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Creative;
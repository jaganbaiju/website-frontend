import { React, useState, useEffect } from 'react';
import "./ourHeadCarousel.css"
import Carousel from 'react-bootstrap/Carousel';
import CarouselIMG from "../assets/images/coo.png"


function OurHeadCarousel() {

    const BASE_URL = "https://website-backend-api-sz6i.onrender.com/";
    const [carouselData, setCarouselData] = useState([]);

    useEffect(() => {
        fetch("https://website-backend-api-sz6i.onrender.com/api/messages/")
            .then((res) => res.json())
            .then((data) => {
                setCarouselData(data.data);
            })
            .catch((err) => console.log(err));
    }, []);


    return (
        <Carousel controls={false} indicators={false} interval={3000} pause={false}>

            {
                carouselData?.map((item) => {

                    const backendUrl = item?.image;
                    const filePath = backendUrl?.replace("/https%3A/ik.imagekit.io/siczeomnnq/", "https://ik.imagekit.io/siczeomnnq/");


                    return (
                        <Carousel.Item key={item.id}>
                            <h2 className='team-carousel-head'>
                                {/* Our COO's Message */}
                                {item?.heading}
                            </h2>
                            <div className="row head-carousel-body">
                                <div className="head-image-div col-12 col-md-4">
                                    <img className="d-block w-100 head-image" src={`${filePath}`} alt="First slide" />
                                </div>
                                <div className="head-message-div col-12 col-md-8">
                                    <p className='head-message'>
                                        {item?.message}
                                    </p>
                                    <p className='head-name'>{item?.name}</p>
                                </div>
                            </div>
                        </Carousel.Item>
                    );
                })
            }

        </Carousel>
    );
}


export default OurHeadCarousel;
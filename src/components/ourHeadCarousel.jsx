import { React, useState, useEffect } from 'react';
import "./ourHeadCarousel.css"
import Carousel from 'react-bootstrap/Carousel';
import CarouselIMG from "../assets/images/coo.png"


function OurHeadCarousel() {

    const BASE_URL = "http://127.0.0.1:8000";
    const [carouselData, setCarouselData] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/messages/")
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
                    return (
                        <Carousel.Item>
                            <h2 className='team-carousel-head'>
                                {/* Our COO's Message */}
                                {item?.heading}
                            </h2>
                            <div className="row head-carousel-body">
                                <div className="head-image-div col-12 col-md-4">
                                    <img className="d-block w-100 head-image" src={`${BASE_URL}${item.image}`} alt="First slide" />
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



            {/* <Carousel.Item>
                <h2 className='team-carousel-head'>
                    Our COO's Message
                </h2>
                <div className="row head-carousel-body">
                    <div className="head-image-div col-12 col-md-4">
                        <img className="d-block w-100 head-image" id='head-image' src={CarouselIMG} alt="First slide" />
                    </div>
                    <div className="head-message-div col-12 col-md-8">
                        <p className='head-message'>
                            ex Nunc Vestibulum urna. orci Vestibulum nisl. amet, placerat Quisque odio tincidunt elit elit diam elit nec nulla, leo. id quis tortor. lorem. efficitur. ipsum Morbi at, convallis. sodales. amet, id maximus tincidunt Cras non. malesuada
                            nisl. lorem. venenatis nisi Lorem dolor Praesent dui. tincidunt non, dolor dolor tincidunt id vitae Morbi quis placerat ultrices porta non, ipsum Praesent non Nam massa scelerisque vitae viverra vel ullamcorper Sed risus placerat eu ex.
                            malesuada tempor gravida elit dignissim, non Vestibulum libero, malesuada tincidunt elit. in tincidunt convallis. ipsum nisi est. vehicula, vitae tincidunt ex luctus vel ultrices leo. volutpat risus malesuada sollicitudin. nec in ex vitae
                        </p>
                        <p className='head-name'>DEMO</p>
                    </div>
                </div>
            </Carousel.Item> */}
        </Carousel>
    );
}


export default OurHeadCarousel;
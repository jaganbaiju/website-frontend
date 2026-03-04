import React from 'react';
import "./ourHeadCarousel.css"
import Carousel from 'react-bootstrap/Carousel';
import CarouselIMG from "../assets/images/coo.png"


function OurHeadCarousel() {
    return (
        <Carousel controls={false} indicators={false}>
            <Carousel.Item>
                <h2 className='team-carousel-head'>
                    Our COO's Message
                </h2>
                <div className="row head-carousel-body">
                    <div className="head-image-div col-12 col-md-4">
                        <img className="d-block w-100 head-image" src={CarouselIMG} alt="First slide"  />
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
            </Carousel.Item>
            <Carousel.Item>
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
            </Carousel.Item>
        </Carousel>
    );
}


export default OurHeadCarousel;
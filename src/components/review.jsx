import React from "react";
import "./review.css"
import ClientIMG from "../assets/images/team.png"
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";


function Review() {
    return (
        <div className="review-card-div col-12 col-md-6 p-1">
            <div className="review-card m-1 p-3 pb-0">
                <div className="row">
                    <div className="review-image col-4">
                        <div className="client-img-div">
                            <img src={ClientIMG} alt="img" width={90} height={90} />
                        </div>
                    </div>
                    <div className="review-content col-8">
                        <h3 className="review-dept">
                            Digital Marketing
                        </h3>
                        <div>
                            <FaStar color="gold" />
                            <FaStar color="gold" />
                            <FaStar color="gold" />
                            <FaStar color="gold" />
                            <FaRegStar color="gold" />
                        </div>
                        <p className="review-msg">
                            Proven experience in digital marketing or related field Strong knowledge of SEO/SEM, Google Ads, Facebook Ads, and Google Analytics Proficiency in tools like Canva, WordPress, Mailchimp, etc.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
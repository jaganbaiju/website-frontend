import "./servicesCard.css"
import { FaArrowRight } from "react-icons/fa";



function ServiceCard(props) {
    return (
        <div className="serivce-card col-sm-6 col-md-3 g-3">
            <div className="card" style={{backgroundImage:`url(${props.bgImg})`}}>
                <div className="service-card-body">
                    <h3 className="service-card-title">
                        {/* DIGITAL MARKETING */}
                        {props.title}
                    </h3>
                    <p className="service-card-desc">
                        {/* REACH YOUR TARGET AUDIENCE */}
                        {props.desc}
                    </p>
                    <a href="/" className="service-card-link">
                        {/* LEARN MORE  */}
                        {props.link} <FaArrowRight color="#FCD104" />
                    </a>
                </div>
            </div>
        </div>

    );
}

export default ServiceCard;
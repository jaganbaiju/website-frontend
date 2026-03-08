import "./clientWorkCard.css";
import { FaPlay } from "react-icons/fa";

function ClientWorkCard(props) {
    return (
        <div className="client-work-card-div">
            <div className="client-work-card" style={{backgroundImage: `linear-gradient(to bottom,transparent 10%, black 100%),
                            url(${props.img})`}}>
            <div className="row">
                <div className="col-1">
                    <FaPlay />
                </div>
                <div className="client-data col-8">
                    <h5 className="client-name">{props.name}</h5>
                    <p className="client-company">{props.comp}</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default ClientWorkCard;
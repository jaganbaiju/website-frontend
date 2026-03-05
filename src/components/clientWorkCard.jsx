import "./clientWorkCard.css";
import WorkIMG from "../assets/images/work-1.png"
import { FaPlay } from "react-icons/fa";

function ClientWorkCard() {
    return (
        <div className="client-work-card-div col-10 col-md-3">
            <div className="client-work-card" style={{backgroundImage: `linear-gradient(to bottom,transparent 10%, black 100%),
                            url(${WorkIMG})`}}>
            <div className="row">
                <div className="col-1">
                    <FaPlay />
                </div>
                <div className="client-data col-8">
                    <h5 className="client-name">John Don</h5>
                    <p className="client-company">founder Medventure</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default ClientWorkCard;
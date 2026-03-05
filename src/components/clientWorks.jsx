import "./clientWorks.css"
import ClientWorkCard from "./clientWorkCard";

function ClientWork () {
    return(
        <div className="client-work-div">
            <div className="client-work">
                <div className="client-work-slider">
                    <div className="client-work-track">
                        <ClientWorkCard />
                        <ClientWorkCard />
                        <ClientWorkCard />
                        <ClientWorkCard />
                        <ClientWorkCard />

                        <ClientWorkCard />
                        <ClientWorkCard />
                        <ClientWorkCard />
                        <ClientWorkCard />
                        <ClientWorkCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientWork;
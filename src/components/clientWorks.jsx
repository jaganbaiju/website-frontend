import "./clientWorks.css"
import ClientWorkCard from "./clientWorkCard";
import { useEffect, useState } from "react";

function ClientWork () {

    const BASE_URL = "http://127.0.0.1:8000";
        const [workData, setWorkData] = useState([]);
    
        useEffect(() => {
            fetch("http://127.0.0.1:8000/api/works/")
                .then((res) => res.json())
                .then((data) => {
                    setWorkData(data.data);
                })
                .catch((err) => console.log(err));
                
        }, []);
    return(
        <div className="client-work-div">
            <div className="client-work">
                <div className="client-work-slider">
                    <div className="client-work-track">

                        {
                            workData?.map((item) => {
                                return (
                                    <ClientWorkCard 
                                        key={item.id}
                                        name={item.name}
                                        img={`${BASE_URL}${item.image}`}
                                        comp={item.company}
                                    />
                                );
                            })
                        }


                        {
                            workData?.map((item) => {
                                return (
                                    <ClientWorkCard 
                                        key={item.id}
                                        name={item.name}
                                        img={`${BASE_URL}${item.image}`}
                                        comp={item.company}
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

export default ClientWork;
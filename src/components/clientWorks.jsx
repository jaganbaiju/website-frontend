import "./clientWorks.css"
import ClientWorkCard from "./clientWorkCard";
import { useEffect, useState } from "react";

function ClientWork () {

    // const BASE_URL = "https://website-backend-api-sz6i.onrender.com/";
        const [workData, setWorkData] = useState([]);
    
        useEffect(() => {
            fetch("https://website-backend-api-sz6i.onrender.com/api/works/")
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

                                const backendUrl = item?.image;
                                const filePath = backendUrl?.replace("/https%3A/ik.imagekit.io/siczeomnnq/", "https://ik.imagekit.io/siczeomnnq/");

                                return (
                                    <ClientWorkCard 
                                        key={item.id}
                                        name={item.name}
                                        img={`${filePath}`}
                                        comp={item.company}
                                    />
                                );
                            })
                        }


                        {
                            workData?.map((item) => {

                                const backendUrl = item?.image;
                                const filePath = backendUrl?.replace("/https%3A/ik.imagekit.io/siczeomnnq/", "https://ik.imagekit.io/siczeomnnq/");

                                return (
                                    <ClientWorkCard 
                                        key={item.id}
                                        name={item.name}
                                        img={`${filePath}`}
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
import {React, useState, useEffect } from "react";
import "./weProvided.css"
import OurServicesList from "./ourServicesList";


function WeProvided() {

    const BASE_URL = "http://127.0.0.1:8000";
    const [listItemdata, setListItemData] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/services_list/")
            .then((res) => res.json())
            .then((data) => {
                setListItemData(data.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return(
        <div className="we-provide-div">
            <div className="serivces-provide">
                <div className="row">
                    <div className="serivce-provide-head-div col-12 col-md-3">
                        <h2 className="serivce-provide-head">
                            SERVICES WE PROVIDE
                        </h2>
                    </div>
                    <div className="service-provide-para-div col-12 col-md-9">
                        <p className="service-provide-para">
                            enim. libero, amet, Ut quis enim. libero, non tincidunt In vitae id tincidunt ex. Praesent Nunc dui diam non. adipiscing ultrices Vestibulum laoreet massa id varius varius Lorem eu placerat. nec consectetur in elit fringilla cursus non commodo eu elementum consectetur fringilla dolor tempor sit tincidunt lobortis
                        </p>
                    </div>
                </div>

                <div className="our-services-list">
                    <hr />

                    {
                        listItemdata?.map((item, index) => {
                            return (
                                <OurServicesList 
                                    key={item.id}
                                    index={index}
                                    title={item.title}
                                    img={`${BASE_URL}${item.image}`}
                                    desc={item.desc}
                                />
                            );
                        })

                        
                    }
                    {/* <OurServicesList />
                    <OurServicesList />
                    <OurServicesList />
                    <OurServicesList />
                    <OurServicesList /> */}
                </div>
            </div>
        </div>
    );
}


export default WeProvided;
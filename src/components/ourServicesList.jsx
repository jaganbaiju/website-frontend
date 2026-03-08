// import React from "react";
import "./ourServicesList.css";


function OurServicesList(props) {
    return (
        <div className="our-service-list">
            <div className="row">
                <div className="col-2">
                    <p>(00{props.index+1})</p>
                </div>
                <div className="col-6">
                    <h3 className="our-service-list-head">
                        {/* ALL PRINTING WORKS */}
                        {props.title}
                    </h3>
                    <p className="our-service-list-para">
                        {/* libero, porta gravida dui sollicitudin. nisl. Sed lacus orci sapien ac at sit in lobortis, orci Lorem ex. urna. vitae nec Nunc malesuada felis, nibh nisl. Nam adipiscing convallis. Donec amet, laoreet lacus, ipsum nisl. placerat elit Ut */}
                        {props.desc}
                    </p>
                </div>
                <div className="col-4 pe-5">
                    <img src={props.img} alt="printing image" className="list-img"/>
                </div>
            </div>
            <hr />
        </div>
    );
}


export default OurServicesList;
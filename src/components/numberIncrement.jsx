import React from "react";
import "./numberIncrement.css"
import CountUp from "react-countup";



function NumberIncrementList() {
    return (
        <div className="num-increment-div col-6 col-md-3 text-center">
            <h1 className="total-number">
                <CountUp start={0} end={5000} duration={2} separator="" enableScrollSpy={true} />+
            </h1>
            <h4 className="service-type">Projects</h4>
        </div>
    );
}


export default NumberIncrementList;
import React,{ useState } from "react";

function WeightClass(props){
    return(
        <div className="weight-class" style = {{backgroundColor: props.weightClassColor}}>
            <h1>{props.weightClass}</h1>
        </div>
    );
}

export default WeightClass
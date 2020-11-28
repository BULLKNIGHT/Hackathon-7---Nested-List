import React, { useState } from "react";
import "../styles/App.css";
import Town from "./Town";

function City(props) {
    const towns = props.cityObj.towns;
    console.log(towns);
    const [selected, setSelected] = useState(false);
    let cityId = "city" + (props.idx + 1);

    return (
        <div>
            <button id={cityId} onClick={() => setSelected(!selected)}>
                {props.cityObj.name}
            </button>
            {selected ? towns.map((town, idx)=> <Town townObj={town} idx={idx} key={idx} />) : ""}
        </div>
    );
}

export default City;
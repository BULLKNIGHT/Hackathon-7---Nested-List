import React, {useState, useEffect} from "react";
import "../styles/App.css";
import City from "./City";

function State(props) {
    const cities = props.stateObj.cities;
    // console.log(cities);
    const [selected, setSelected] = useState(false);
    // console.log("props", props);
    let stateId = "state" + (props.idx + 1); 
    
    return (
        <div>
            <button id={stateId} onClick={() => setSelected(!selected)}>
                {props.stateObj.name}
            </button>
            {selected ? cities.map((city, idx)=> <City cityObj={city} idx={idx} key={idx} />) : ""}
        </div>
    );

    

}

export default State; 
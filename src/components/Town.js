import React from "react";

function State(props) {
    let townId = "city" + (props.idx + 1);
    return (
        <div id={townId}>
            {props.townObj.name}
        </div>
    );
}

export default State;
import React from "react";
import "./Filter.css";

function Filter(props) {
    return (
        <div>
            <input 
                className="input"
                placeholder={`Search by ${props.type}`}
                onChange={e => {
                    props.filterFunction(e.target.value.toLocaleLowerCase().trim())
                }}
            />
        </div>
    )
}

export default Filter

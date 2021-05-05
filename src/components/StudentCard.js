import React from 'react';
import "./StudentCard.css";
import Tag from "./Tag";

function StudentCard(props) {
    return (
        <div className="container">
            <img src={props.img} alt="pic" className="pic"/>
                <h1 className="name">{props.firstName + " " + props.lastName}</h1>
                <div className="content">
                    <div>Email: {props.email}</div>
                    <div>Company: {props.company}</div>
                    <div>Skill: {props.skill}</div>
                    <div>Average: {props.grades}%</div>
                </div>
        </div>
    )
}

export default StudentCard;


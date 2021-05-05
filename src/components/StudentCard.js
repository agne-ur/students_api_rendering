import React from 'react';
import "./StudentCard.css"

function StudentCard(props) {
    return (
        <div className="container">
            <img src={props.img} alt="pic" className="pic"/>
            <div className="text">
                <div className="name">{props.firstName + " " + props.lastName}</div>
                <div>Email: {props.email}</div>
                <div>Company: {props.company}</div>
                <div>Skill: {props.skill}</div>
                <div>Average: {props.grades}%</div>
            </div>
        </div>
    )
}

export default StudentCard

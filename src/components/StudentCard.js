import React from 'react';
import "./StudentCard.css";
import Tag from "./Tag";
import TagForm from "./TagForm"

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
                    <div>Tags:</div>
                    {props.tags.length > 0
                        ? props.tags.map((tag, index) => {
                            return <Tag key={index.toString()} tag={tag}/>;
                        })
                        : null}
                    <TagForm index={props.index} addTag={props.addTag}/>
                </div>
        </div>
    )
}

export default StudentCard;


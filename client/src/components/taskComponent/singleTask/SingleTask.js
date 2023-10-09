import React from "react";

function SingleTask(props) {

    const singleTaskStyle = {
        width: '90%',
        background: '#C5DFF8',
        margin: "30px auto",
        borderRadius: "10px",
        padding: "10px 15px 10px 15px",
        boxShadow: "2px 2px 10px 5px rgba(0,0,0,0.25)",
    }
    
    return (<div className="single-task" style={singleTaskStyle}>
        <h2 style={{ textAlign: "left" }}>{props.title}</h2>
        <p style={{ textAlign: "left" }}>{props.description}</p>
    </div>)
}

export default SingleTask
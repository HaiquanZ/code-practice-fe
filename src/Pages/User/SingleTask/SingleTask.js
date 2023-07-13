import React from "react";
import './SingleTask.css';

function SingleTask(){
    
    const idTask = window.location.href.split('=')[1];
    console.log(idTask);

    return(
        <div className="container singletask">
            <h1>Sign Task</h1>
        </div>
    )
}

export default SingleTask;
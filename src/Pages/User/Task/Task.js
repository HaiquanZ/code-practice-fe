import React, { useEffect, useState } from "react";
import './Task.css';
import axios from "axios";

function Task(){

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/tasks')
        .then(function (response) {
            setTasks(response.data.tasks);
        })
        .catch(function (error) {
            console.log(error);
        });
    },[])

    function viewDetailTask(id){
        window.location.href = `http://localhost:3000/detail?id=${id}`;
    }

    return(
        <div className="container task">
            <h1>All of task</h1>
            <div className="list-task">
                {
                    tasks.map((task) => (
                        <div className="item-task" key={task.id} onClick={() => viewDetailTask(task.id)}>
                            <h2>Name: {task.name}</h2>
                            <h3>Pass: 0/100</h3>
                        </div>
                    ) )
                }
            </div>
        </div>
    )
}

export default Task;
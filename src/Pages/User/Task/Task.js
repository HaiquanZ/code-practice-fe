import React, { useEffect, useState } from "react";
import './Task.css';
import axios from "axios";
import { useSelector } from "react-redux";

function Task(){

    const [tasks, setTasks] = useState([]);

    const user = useSelector(state => state.auth.login.currentUser);

    useEffect(() => {
        if (user){
            axios.get('http://localhost:8000/api/tasks/usertask', {headers:{authorization: user.token}})
            .then(function (response) {
                setTasks(response.data.tasks);
            })
            .catch(function (error) {
                console.log(error);
            });
        } else {
            axios.get('http://localhost:8000/api/tasks')
            .then(function (response) {
                setTasks(response.data.tasks);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },[user])

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
                            <h3>{task.pass ? 'Passed' : 'Not Pass'}</h3>
                        </div>
                    ) )
                }
            </div>
        </div>
    )
}

export default Task;
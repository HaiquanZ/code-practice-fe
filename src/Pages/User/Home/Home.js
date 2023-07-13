import React, { useEffect, useState } from "react";
import './Home.css';
import { getAllTasks } from "../../../redux/requestTask";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Home(){

    const dispatch = useDispatch();
    const [topUser, setTopUser] = useState([]);

    useEffect(() => {
        getAllTasks(dispatch);

        axios.get('http://localhost:8000/api/users')
        .then(function (response) {
            setTopUser(response.data.users.slice(0,3));
        })
        .catch(function (error) {
            console.log(error);
        });
    },[])

    
    const tasks = useSelector((state) => state.task.getAllTasks.tasks);
    console.log(tasks);

    const newTask = tasks.tasks.slice(0,3);

    return(
        <div className="container home">
            <div className="banner row">
                <div className="col-sm-6">
                    <img src="https://i.imgur.com/8bEc9CC.png" alt="banner"/>
                </div>
                <div className="col-sm-6 banner-text">
                    <h1>Conquer Challenges</h1>
                    <div className="banner-btn"><button>Get Started</button></div>
                </div>
            </div>

            <div className="task-user row">
                <div className="tu-task col-sm-8">
                    <h1>New Task</h1>
                    {
                        newTask.map((task) => (
                            <div key={task.id} className="newtask-item">
                                <h3>{task.name}</h3>
                            </div>
                        ))
                    }
                </div>
                <div className="tu-user col-sm-4">
                    <h1>Popular User</h1>
                    {
                        topUser.map((user, index) => (
                            <div key={index} className="topuser-item">
                                <h3>{index+1}, {user.name}</h3>
                                <h3>{user.trophy} Trophy</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;
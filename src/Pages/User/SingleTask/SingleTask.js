import React, { useEffect, useState } from "react";
import './SingleTask.css';
import axios from "axios";
import { useSelector } from "react-redux";

function SingleTask(){
    
    const idTask = window.location.href.split('=')[1];

    const [task, setTask] = useState({});
    const [code, setCode] = useState('');
    const [mark, setMark] = useState(0);
    const [result, setResult] = useState('');
    const user = useSelector(state => state.auth.login.currentUser);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/tasks/${idTask}`)
        .then(function (response) {
            setTask(response.data.task);
        })
        .catch(function (error) {
            console.log(error);
        });
    },[idTask]);

    function handleSubmitCode(){
        axios.post(`http://localhost:8000/compiler/${idTask}`, {code: code})
        .then(res => {
            setMark(res.data.mark);
        })
        .catch(err => console.log(err));

        //addpoint for user
        axios.post('http://localhost:8000/api/users/addpoint', {taskId: idTask}, {headers:{authorization: user.token}})
        .then(res => {
            setResult(res.data.message);
        })
        .catch(err => console.log(err));
    }

    return(
        <div className="container singletask">
            <div className="infor-task">
                <h1>Name</h1>
                <h3>{task.name}</h3>
                <h1>Description</h1>
                <h3>{task.description}</h3>
                <h1>Format Input and Output</h1>
                <h3>{task.format}</h3>
                <h1>Comments</h1>
            </div>

            <div className="ide">
                <div className="d-flex justify-content-between">
                    <h1>IDE</h1>
                    <button className="btn-submit-code" onClick={handleSubmitCode}>Submit</button>
                </div>
                <textarea onChange={e => setCode(e.target.value)}></textarea>
                <h1>Result</h1>
                <h3>Mark: {mark}</h3>
                <h3>{result}</h3>
                
            </div>
        </div>
    )
}

export default SingleTask;
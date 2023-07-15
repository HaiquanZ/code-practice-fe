import React, { useEffect, useState } from "react";
import './ManageTask.css';
import axios from "axios";
import { useSelector } from "react-redux";

function ManageTask(){

    const [tasks, settasks] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [format, setFormat] = useState('');
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const admin = useSelector(state => state.auth.login.currentUser);

    useEffect(() => {
        axios.get('http://localhost:8000/api/tasks/')
        .then(response => {
            settasks(response.data.tasks);
        })
        .catch(err => console.log(err));
    },[]);

    function handleShowInfor(){
        document.querySelector('.infor-detail').style.display = 'block';
        document.querySelector('.overlay').style.display = 'block';
    }

    function handleHideInfor(){
        document.querySelector('.infor-detail').style.display = 'none';
        document.querySelector('.overlay').style.display = 'none';
    }

    function addTask(){
        const taskData = {
            name,
            description,
            format,
            input,
            output
        }

        axios.post('http://localhost:8000/api/tasks', taskData, {headers: { authorization: admin.token}})
        .then(res => {
            alert(res.data.message);
            window.location.reload(false);
        })
        .catch(err => console.log(err));
    }

    function editTask(name, description, format, input, output){
        document.getElementById('input-task-name').value = name;
        document.getElementById('input-task-description').value = description;
        document.getElementById('input-task-format').value = format;
        document.getElementById('input-task-input').value = input;
        document.getElementById('input-task-output').value = output;
        handleShowInfor();
    }

    return(
            <div className="container manage-task">
                <h1>Manage Task</h1>

                <button className="btn btn-primary" onClick={() => editTask('','','','','')} style={{margin: '1rem auto'}}>Add New Task</button>

                <table className="table table-striped table-primary table-rank">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Task</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task) => (
                                <tr key={task.id}>
                                    <td>{task.id}</td>
                                    <td>{task.name}</td>
                                    <td>
                                        <button 
                                            className="btn btn-primary" 
                                            onClick={() => editTask(task.name, task.description, task.format, task.input, task.output)}
                                        >
                                            Edit
                                        </button>
                                        <button className="btn btn-danger" style={{marginLeft:'1rem'}}>Remove</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className="overlay" onClick={handleHideInfor}></div>
                <div className="infor-detail">
                        <h1>Add New Task</h1>
                        <h3>Name</h3>
                        <input id="input-task-name" type="text" placeholder="Enter name task" onChange={e => setName(e.target.value)}/>
                        <h3>Description</h3>
                        <input id="input-task-description" type="text" placeholder="Enter description" onChange={e => setDescription(e.target.value)}/>
                        <h3>Format</h3>
                        <textarea id="input-task-format" type="text" placeholder="Enter format" onChange={e => setFormat(e.target.value)}/>
                        <h3>Input</h3>
                        <textarea id="input-task-input" type="text" placeholder="Enter input" onChange={e => setInput(e.target.value)}/>
                        <h3>Output</h3>
                        <textarea id="input-task-output" type="text" placeholder="Enter output" onChange={e => setOutput(e.target.value)}/>
                        <br/>
                        <button className="btn btn-primary" style={{marginBottom: '2rem'}} onClick={addTask}>Add or Update</button>

                </div>
                
            </div>
        )
}

export default ManageTask;
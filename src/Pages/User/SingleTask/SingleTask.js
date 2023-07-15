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
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const user = useSelector(state => state.auth.login.currentUser);

    //handle 'Tab' Character
    function enableTab(id) {
        var el = document.getElementById(id);
        el.onkeydown = function(e) {
            if (e.keyCode === 9) { // tab was pressed
    
                // get caret position/selection
                var val = this.value,
                    start = this.selectionStart,
                    end = this.selectionEnd;
    
                // set textarea value to: text before caret + tab + text after caret
                this.value = val.substring(0, start) + '\t' + val.substring(end);
    
                // put caret at right position again
                this.selectionStart = this.selectionEnd = start + 1;
    
                // prevent the focus lose
                return false;
    
            }
        };
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/tasks/${idTask}`)
        .then(function (response) {
            setTask(response.data.task);
        })
        .catch(function (error) {
            console.log(error);
        });

        axios.get(`http://localhost:8000/api/comments/${idTask}`)
        .then(function(res){
            setComments(res.data.comments);
        })
        .catch(function(error){
            console.log(error);
        })

        enableTab('ide-code');
    },[idTask]);

    function handleSubmitCode(){
        if (!user) alert('You must sign in first');
        else if (code === '') alert('Code is empty!');
        else{
            axios.post(`http://localhost:8000/compiler/${idTask}`, {code: code})
            .then(res => {
                if (res.data.mark === 0) setResult('Result is not correct or your program have error!');
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
    }

    function handleComment(){
        if (!user) alert('You must sign in first!');
        else if (newComment === '') alert('Comment is empty!');
        else{
            axios.post(`http://localhost:8000/api/comments/${idTask}`, {comment: newComment}, {headers:{authorization: user.token}})
            .then(res => {
                alert(res.data.message);
                window.location.reload(false);
            })
            .catch(err => console.log(err));
        }
    }

    // document.getElementById('ide-code').addEventListener('keydown', function(e) {
    //     if (e.key == 'Tab') {
    //       e.preventDefault();
    //       var start = this.selectionStart;
    //       var end = this.selectionEnd;
      
    //       // set textarea value to: text before caret + tab + text after caret
    //       this.value = this.value.substring(0, start) +
    //         "\t" + this.value.substring(end);
      
    //       // put caret at right position again
    //       this.selectionStart =
    //         this.selectionEnd = start + 1;
    //     }
    // });


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
                {
                    comments.map((comment, index) =>(
                        <div className="comment-item" key={index}>
                            <h3>{comment.name}</h3>
                            <h4>{comment.comment}</h4>
                        </div>
                    ))
                }

                <div className="input-comment">
                    <input type="text" placeholder="Write comment here" onChange={e => setNewComment(e.target.value)}></input>
                    <button className="btn-submit-comment" onClick={handleComment}>Submit</button>
                </div>
            </div>

            <div className="ide">
                <div className="d-flex justify-content-between">
                    <h1>IDE</h1>
                    <button className="btn-submit-code" onClick={handleSubmitCode}>Submit</button>
                </div>
                <textarea onChange={e => setCode(e.target.value)} id="ide-code"></textarea>
                <h1>Result</h1>
                <h3>Mark: {mark}</h3>
                <h3>{result}</h3>
                
            </div>
        </div>
    )
}

export default SingleTask;
import React, {useState, useEffect} from "react";
import './ManageComment.css';
import axios from "axios";
import { useSelector } from "react-redux";

function ManageCommnet(){

    const [comments, setComments] = useState([]);
    const admin = useSelector((state) => state.auth.login.currentUser);

    useEffect(() => {
        axios.get('http://localhost:8000/api/comments', {headers: { authorization: admin.token}})
        .then(res => setComments(res.data.comments))
        .catch(err => console.log(err))
    },[admin.token]);

    function handleDeleteComment(id){
        axios.delete(`http://localhost:8000/api/comments/${id}`, {headers: { authorization: admin.token}})
        .then(res => {
            alert(res.data.message);
            window.location.reload(false);
        })
        .catch(err => console.log(err))
    }

    return(
            <div className="manage-comment container">
                <h1>Manage Commnet</h1>

                <table className="table table-striped table-primary table-rank">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User</th>
                            <th>Comment</th>
                            <th>Task</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            comments.map((cmt) => (
                                <tr key={cmt.commentid}>
                                    <td>{cmt.commentid}</td>
                                    <td>{cmt.userName}</td>
                                    <td>{cmt.comment}</td>
                                    <td>{cmt.taskName}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => handleDeleteComment(cmt.commentid)}>Remove</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
}

export default ManageCommnet;
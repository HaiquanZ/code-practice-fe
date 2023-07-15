import React, { useEffect, useState } from "react";
import './ManageUser.css';
import axios from "axios";
import { useSelector } from "react-redux";

function ManageUser(){

    const [users, setUsers] = useState([]);

    const admin = useSelector((state) => state.auth.login.currentUser);

    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
        .then(function (response) {
            setUsers(response.data.users);
        })
        .catch(function (error) {
            console.log(error);
        });
    },[]);

    function handleDeleteUser(id){
        axios.delete(`http://localhost:8000/api/users/${id}`,{headers: {authorization: admin.token}})
        .then(function (response) {
            alert(response.data.message);
            window.location.reload(false);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    return(
            <div className="manage-user container">
                <h1>Manage User</h1>

                <table className="table table-striped table-primary table-rank">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Trophy</th>
                            <th>Rank</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.trophy}</td>
                                    <td>
                                        {
                                            users.trophy >= 50 ? 'Diamond' : (user.trophy >= 40 ? 'Gold' : (user.trophy >= 30 ? 'Silver' : (user.trophy >= 10 ? 'Bronze' : 'Vô danh')))
                                        }
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => handleDeleteUser(user.id)}>Remove</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
}

export default ManageUser;
import React from "react";
import './Profile.css';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../redux/resquestAuth";
import { useNavigate } from "react-router-dom";

function Profile(){
    const dispatch = useDispatch('');
    const navigate = useNavigate('');

    const user = useSelector((state) => state.auth.login.currentUser);

    function handleLogout(){
        logoutUser(dispatch, navigate);
    }

    return(
        <div className="profile">
            <div className="container d-flex justify-content-center">
                <div className="profile-content">
                    <h1>Information of Account</h1>
                    <table className="table table-primary table-striped">
                        <thead>
                            <tr>
                                <th>Thông tin</th>
                                <th>Nội dung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{user.name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{user.email}</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>{user.gender}</td>
                            </tr>
                            <tr>
                                <td>Trophy</td>
                                <td>{user.trophy}</td>
                            </tr>
                            <tr>
                                <td>Rank</td>
                                <td>{user.rank}</td>
                            </tr>
                        </tbody>
                    </table>

                    <button className="btn-logout" onClick={handleLogout}>Log out</button>
                </div>
            </div>  
        </div>
    )
}

export default Profile;
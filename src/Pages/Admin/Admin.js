import React from "react";
import './Admin.css'
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/resquestAuth";

function Admin(){

    const admin = useSelector(state => state.auth.login.currentUser);
    if (!admin || admin.role_id !== 1) {
        alert('You are not admin!');
        window.location.href = 'http://localhost:3000/';
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleLogoutAdmin(){
        logoutUser(dispatch, navigate);
    }

    return(
            <div className="admin">
                <h1>You can manage CodePractice Website here</h1>
                <div className="tab-manage">
                    <Link to="/admin" style={{textDecoration:'none'}} id="tab-item"><h2 >Manage Task</h2></Link>
                    <Link to="/admin/user" style={{textDecoration:'none'}}><h2>Manage User</h2></Link>
                    <Link to="/admin/comment" style={{textDecoration:'none'}}><h2>Manage Comment</h2></Link>
                    <button className="btn btn-primary" onClick={handleLogoutAdmin}>Log out Admin</button>
                </div>
                <Outlet/>
            </div>

        )
};

export default Admin;
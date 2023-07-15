import React, { useEffect } from "react";
import './Admin.css'
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function Admin(){

    const admin = useSelector(state => state.auth.login.currentUser);
    if (!admin || admin.role_id !== 1) {
        alert('You are not admin!');
        window.location.href = 'http://localhost:3000/';
    }

    return(
            <div className="admin">
                <h1>You can manage CodePractice Website here</h1>
                <div className="tab-manage">
                    <Link to="/admin" style={{textDecoration:'none'}} id="tab-item"><h2 >Manage Task</h2></Link>
                    <Link to="/admin/user" style={{textDecoration:'none'}}><h2>Manage User</h2></Link>
                    <Link to="/admin/comment" style={{textDecoration:'none'}}><h2>Manage Comment</h2></Link>
                </div>
                <Outlet/>
            </div>

        )
};

export default Admin;
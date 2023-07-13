import React, { useState } from "react";
import './Sign.css';
import { loginUser, registerUser } from "../../../redux/resquestAuth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Sign(){

    function showSignUp(){
        document.querySelector('.signin').style.display = 'none';
        document.querySelector('.signup').style.display = 'block';
    }

    function showSignIn(){
        document.querySelector('.signin').style.display = 'block';
        document.querySelector('.signup').style.display = 'none';
    }

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch('');
    const navigate = useNavigate('');

    function handleLogin(){
        const userData = {
            email,
            password
        }
        //console.log(userData)
        loginUser(userData, dispatch, navigate);
    }

    function handleRegister(){
        const userData = {
            name,
            email,
            password
        }

        registerUser(userData, dispatch, navigate);
        showSignIn();
    }

    return(

        <div className="container sign">
            <div className="form-signin signin">
                <h1>Sign In</h1>

                <h3>Email</h3>
                <input type="email" className="input-text" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                <h3>Password</h3>
                <input type="password" className="input-text" placeholder="Enter password" onChange={e => setPassword(e.target.value)}/>
                <br/>
                <h4 onClick={showSignUp}>Dont have account? Sign up</h4>
                <br/>
                <button className="btn btn-primary" onClick={handleLogin}>Sign In</button>
            </div>

            <div className="form-signin signup">
                <h1>Sign Up</h1>

                <h3>Email</h3>
                <input type="email" className="input-text" placeholder="Enter email"  onChange={e => setEmail(e.target.value)}/>
                <h3>Password</h3>
                <input type="password" className="input-text" placeholder="Enter password" onChange={e => setPassword(e.target.value)}/>
                <h3>Name</h3>
                <input type="text" className="input-text" placeholder="Enter your name" onChange={e => setName(e.target.value)}/>
                <h4 onClick={showSignIn}>Back to Sign in</h4>
                <br/>
                <button className="btn btn-primary" onClick={handleRegister}>Sign Up</button>
            </div>
        </div>
    )
}

export default Sign;
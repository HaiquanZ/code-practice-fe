import React from "react";
import './Sign.css';

function Sign(){

    function showSignUp(){
        document.querySelector('.signin').style.display = 'none';
        document.querySelector('.signup').style.display = 'block';
    }

    function showSignIn(){
        document.querySelector('.signin').style.display = 'block';
        document.querySelector('.signup').style.display = 'none';
    }

    return(

        <div className="container sign">
            <div className="form-signin signin">
                <h1>Sign In</h1>

                <h3>Email</h3>
                <input type="email" className="input-text" placeholder="Enter email" />
                <h3>Password</h3>
                <input type="password" className="input-text" placeholder="Enter password" />
                <br/>
                <h4 onClick={showSignUp}>Dont have account? Sign up</h4>
                <br/>
                <button className="btn btn-primary">Sign In</button>
            </div>

            <div className="form-signin signup">
                <h1>Sign Up</h1>

                <h3>Email</h3>
                <input type="email" className="input-text" placeholder="Enter email" />
                <h3>Password</h3>
                <input type="password" className="input-text" placeholder="Enter password" />
                <h3>Name</h3>
                <input type="text" className="input-text" placeholder="Enter your name" />
                <h4 onClick={showSignIn}>Back to Sign in</h4>
                <br/>
                <button className="btn btn-primary">Sign Up</button>
            </div>
        </div>
    )
}

export default Sign;
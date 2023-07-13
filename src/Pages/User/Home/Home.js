import React from "react";
import './Home.css';

function Home(){
    return(
        <div className="container home">
            <div className="banner row">
                <div className="col-sm-6">
                    <img src="https://i.imgur.com/8bEc9CC.png" alt="banner"/>
                </div>
                <div className="col-sm-6 banner-text">
                    <h1>Conquer Challenges</h1>
                    <div className="banner-btn"><button>Get Started</button></div>
                </div>
            </div>

            <div className="task-user row">
                <div className="tu-task col-sm-8">
                    <h1>New Task</h1>
                </div>
                <div className="tu-user col-sm-4">
                    <h1>Popular User</h1>
                </div>
            </div>
        </div>
    )
}

export default Home;
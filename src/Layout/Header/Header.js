import React from "react";
import styles from './Header.module.css';
import { Link } from "react-router-dom";

function Header(){

    return(
        <div className={styles['big-header']}>
            <div className={`container ${styles.header}`}>
                <div className={styles["logo-header"]}>
                    <Link to="/" style={{textDecoration: 'none'}}><h1>CodePractice</h1></Link>
                </div>
                <div className={styles["nav-header"]}>
                    <ul>
                        <Link to="/" style={{textDecoration: 'none'}}><li>Home</li></Link>
                        <Link to="/task" style={{textDecoration: 'none'}}><li>Task</li></Link>
                        <Link to="/rank" style={{textDecoration: 'none'}}><li>Rank</li></Link>
                        <Link to="/about" style={{textDecoration: 'none'}}><li>About</li></Link>
                    </ul>
                    <Link to="/sign" style={{textDecoration: 'none'}}><i className="fa-solid fa-user"></i></Link>
                </div>
            </div>

            <div className={`container ${styles["header-mobile"]}`}>
                <div className={styles["logo-header"]}>
                    <h1>CodePractice</h1>
                </div>
                <div className={`${styles["list-icon"]}`}>
                    <i className="fa-solid fa-list"></i>
                </div>
            </div>

            <div className={`${styles.overlay}`} id="overlay"></div>
            <div className={`${styles["menu-mobile"]} menu-mobile`}>
                <div className={styles['menu-mobile-item']}>
                    <i className="fa-solid fa-house"></i>
                    Home
                </div>
                <div className={styles['menu-mobile-item']}>
                    <i className="fa-solid fa-code"></i>
                    Task
                </div>
                <div className={styles['menu-mobile-item']}>
                    <i className="fa-solid fa-ranking-star"></i>
                    Rank
                </div>
                <div className={styles['menu-mobile-item']}>
                    <i className="fa-solid fa-user"></i>
                    About
                </div>
                <div className={styles["btn-header"]}>
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Header;
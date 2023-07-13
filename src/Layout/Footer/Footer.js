import React from "react";
import './Footer.css';

function Footer(){
    return(
        <div className="footer">
            <div className="container footer-content">
                <div>
                    <h3>Copyright © 2023 - DucKhiem</h3>
                </div>

                <div className="contact">
                    <a href="https://github.com/HaiquanZ"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.pinterest.com/duckhiem26/_created/"><i className="fa-brands fa-pinterest"></i></a>
                    <a href="https://www.facebook.com/hqz.khim/"><i className="fa-brands fa-facebook"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
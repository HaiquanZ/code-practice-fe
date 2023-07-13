import React from "react";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import { Outlet } from "react-router-dom";

function User(){
    return(
            <div>
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        )
};

export default User;
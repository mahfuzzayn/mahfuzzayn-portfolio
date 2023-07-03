import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Main = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "#27374D";
    }, []);

    return (
        <div className="main-layout container max-w-[1920px] mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;

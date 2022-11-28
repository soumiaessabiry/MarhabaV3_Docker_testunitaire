import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const user=localStorage.getItem("User")
    const role=localStorage.getItem("role")
    const phone=localStorage.getItem("phone")

useEffect(() => {
        const checkUser = () => {
            if (!localStorage.getItem("User")) {
                navigate("/login");
            }
        };
        checkUser();
    }, [navigate]);

    const handleSignOut = () => {
        localStorage.removeItem("User");
        navigate("/login");
    };

    return (
        <div className='dashboard'>
            <h2 style={{ marginBottom: "30px" }}>Welcom {user}  </h2>
            <h2 style={{ marginBottom: "30px" }}>Your role is  {role} </h2>
            <h2 style={{ marginBottom: "30px" }}>You phone is  {phone} </h2>
            <button className='signOutBtn' onClick={handleSignOut}>
                SIGN OUT
            </button>
        </div>
    );
};

export default Dashboard;
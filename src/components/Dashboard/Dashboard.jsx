import React, {useEffect, useState} from 'react';
import "./Dashboard.css";
import DashboardSidebar from "./DashboardSidebar/DashboardSidebar.jsx";
import DashboardMain from "./DashboardMain/DashboardMain.jsx";
import DashboardCreate from "./DashboardCreate/DashboardCreate.jsx";
import DashboardCVS from "./DashboardCVS/DashboardCVS.jsx";
import DashboardSettings from "./DashboardSettings/DashboardSettings.jsx";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../../Firebase.js";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState("DashboardMain") // ["DashboardMain", "DashboardCVS", "DashboardSettings
    const [dashboardComponent, setDashboardComponent] = useState(<DashboardMain/>)
    const [user, setUser] = useState(null);
    const [loggedInUser, setLoggedInUser] = useState(false);
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoggedInUser(true)
                console.log(user)
            } else {
                // User is signed out
                // ...
                setLoggedInUser(false)
                console.log("User is signed out")
                navigate("/login")

            }
        });

    }, [])

    const handlePageChange = (page) => {
        setCurrentPage(page)
        if(page === "DashboardCreate") {
            setDashboardComponent(<DashboardCreate/>)
        } else if(page === "DashboardCVS") {
            setDashboardComponent(<DashboardCVS/>)
        } else if(page === "DashboardSettings") {
            setDashboardComponent(<DashboardSettings/>)
        }
        else {
            setDashboardComponent(<DashboardMain/>)
        }
    }


    return (
        <div>
            <div className="dashboardContainer">
            <DashboardSidebar handlePageChange={handlePageChange}/>
            {dashboardComponent}
            </div>
        </div>
    );
};

export default Dashboard;

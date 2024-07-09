import React from 'react';
import "./DashboardSidebar.css";
import Button from "../../../reusable/Button/Button.jsx";
import {signOut} from "firebase/auth";
import {auth} from "../../../Firebase.js";

const DashboardSidebar = (props) => {
    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Signed out successfully")
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div>
            <div className="dashboardSidebarContainer">
                <div className={"dashboardLogo"}>
                    <h1>CVForge</h1>
                </div>
                <div className={"dashboardProfilePic"}>
                </div>
                <div className="dashboardSidebarLinks">
                    <div className="dashboardSidebarLink">
                        <Button text={"Dashboard"} onClick={() => props.handlePageChange("DashboardMain")}/>
                    </div>
                    <div className="dashboardSidebarLink">
                        <Button text={"Create"} onClick={() => props.handlePageChange("DashboardCreate")}/>
                    </div>
                    <div className="dashboardSidebarLink">
                       <Button text={"My CV's"} onClick={() => props.handlePageChange("DashboardCVS")}/>
                    </div>
                    <div className="dashboardSidebarLink">
                        <Button text={"Settings"} onClick={() => props.handlePageChange("DashboardSettings")}/>
                    </div>
                    <div className="dashboardSidebarLink">
                        <Button text={"Logout"} onClick={handleLogout}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;

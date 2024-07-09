import React from 'react';
import Button from "../../../reusable/Button/Button.jsx";
import {useNavigate} from "react-router-dom";
import "./HomeNav.css";
const HomeNav = () => {
    const navigate = useNavigate();
    const handleNavigate = (e) => {
        if (e.target.innerText === "Log In") {
            navigate("/login");
        } else {
            navigate("/signup");
        }
    };
    return (
        <div>
            <div className="homeNavContainer">
                <div className="homeNav">
                    <div className={"homeTitle"} onClick={()=>navigate("/")}>
                        <h1>CVForge</h1>
                    </div>
                    <div className={"homeLinks"}>
                        <Button text={"Log In"} onClick={handleNavigate} />
                        <Button text={"Sign Up"} onClick={handleNavigate} />

                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeNav;

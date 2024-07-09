import React from 'react';
import "./HomeInformation.css";
const HomeInformation = () => {
    return (
        <div>
            <div className="homeInformationContainer">
                <div className="homeInformation">
                    <div className={"homeTitle"}>
                        <h1>Welcome To CVForge</h1>
                    </div>
                    <div className={"homeDescription"}>
                        <p>CVForge is a platform that allows you to create and manage your CVs online.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeInformation;

import react from "react"
import "./DashboardSettings.css"
import UserData from "./UserData/UserData.jsx";
import SettingsAccordian from "./SettingsAccordian/SettingsAccordian.jsx";
const DashboardSettings = () => {

    return (
        <div className="dashboardSettingsContainer">
            <SettingsAccordian />
            {/*<UserData />*/}
        </div>
    );
};

export default DashboardSettings;
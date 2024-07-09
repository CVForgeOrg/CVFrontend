import react from "react"
import "./SettingsAccordian.css"
import Accordion from "../../../../reusable/Accordian/Accordian.jsx";
import userData from "../UserData/UserData.jsx";
import UserExperience from "../UserExperience/UserExperience.jsx";
import UserData from "../UserData/UserData.jsx";
import {auth} from "../../../../Firebase.js";

const SettingsAccordian = () => {
    const user = auth.currentUser;
    const items = [
        {
            title: 'User Information',
            content: <UserData />
        },
        {
            title: 'Education',
            content: <UserExperience typeOfExperience="education" userId={user.uid}/>
        },
        {
            title: 'Work Experience',
            content: <UserExperience typeOfExperience="work" userId={user.uid}/>
        },
        {
            title: 'Projects',
            content: <UserExperience typeOfExperience="projects" userId={user.uid}/>
        },
        {
            title: 'Volunteer Experience',
            content: <UserExperience  typeOfExperience="volunteer" userId={user.uid}/>
        }

    ];
    return (
        <div>
            <Accordion items={items} />
        </div>
    );
};

export default SettingsAccordian;
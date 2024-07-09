import react, {useState} from "react"
import "./UserExperience.css"
import Button from "../../../../reusable/Button/Button.jsx";
import {apiPost} from "../../../../Api.js";
const UserExperience = (props) => {
    const [formData, setFormData] = useState({
        CompanyName: '',
        Position: '',
        StartDate: '',
        EndDate: '',
        SkillsUsed: '',
        Description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = {
            ...formData,
            userId: props.userId,
            typeOfExperience: props.typeOfExperience
        }

        apiPost('databaseSaving/userExperience/', formData)
            .then(response => {
                console.log('Response:', response);
            }).catch(error => {
                console.error('Error:', error);
            });

        console.log('Form Data:', payload);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className={"UserDataLabel"}>
                    Company Name:
                    <input type="text" name={"CompanyName"} value={formData.CompanyName} onChange={handleChange}
                           className={"UserDataInput"}/>
                </label>
                <label className={"UserDataLabel"}>
                    Position:
                    <input type="text" name="Position" value={formData.Position} onChange={handleChange}
                           className={"UserDataInput"}/>
                </label>
                <label className={"UserDataLabel"}>
                    Start Date:
                    <input type="date" name="StartDate" value={formData.StartDate} onChange={handleChange}
                           className={"UserDataInput"}/>
                </label>
                <label className={"UserDataLabel"}>
                    End Date:
                    <input type="date" name="EndDate" value={formData.EndDate} onChange={handleChange}
                           className={"UserDataInput"}/>
                </label>
                <label className={"UserDataLabel"}>
                    Skills Used:
                    <input type="text" name="SkillsUsed" value={formData.SkillsUsed} onChange={handleChange}
                           className={"UserDataInput"}/>
                </label>
                <label className={"UserDataLabel"}>
                    Description:
                    <input type="text" name="Description" value={formData.Description} onChange={handleChange}
                           className={"UserDataInput"}/>
                </label>
                <Button type="submit" text="Save"/>
            </form>
        </div>
    );
};

export default UserExperience;
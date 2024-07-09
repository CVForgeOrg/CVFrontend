import react,{useState} from "react"
import Button from "../../../../reusable/Button/Button.jsx";
import "./UserData.css"
import {apiPost} from "../../../../Api.js";

const UserData = () => {
    const [formData, setFormData] = useState({
        emailAddress: '',
        PhoneNumber: '',
        GitHubLink: '',
        LinkedInLink: '',
        PortfolioLink: '',
        location: ''
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
        apiPost('databaseSaving/userInfo/', formData)
            .then(response => {
                console.log('Response:', response);
            }).catch(error => {
                console.error('Error:', error);
            });

        console.log('Form Data:', formData);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label className={"UserDataLabel"}>
                    email Address:
                    <input type="text" name="emailAddress" value={formData.emailAddress} onChange={handleChange} className={"UserDataInput"}/>
                </label>
                <label className={"UserDataLabel"} >
                    Phone Number:
                    <input type="text" name="PhoneNumber" value={formData.PhoneNumber} onChange={handleChange} className={"UserDataInput"}/>
                </label>
                <label className={"UserDataLabel"} >
                    GitHub Link:
                    <input type="text" name="GitHubLink" value={formData.GitHubLink} onChange={handleChange} className={"UserDataInput"}/>
                </label>
                <label className={"UserDataLabel"} >
                    LinkedIn Link:
                    <input type="text" name="LinkedInLink" value={formData.LinkedInLink} onChange={handleChange} className={"UserDataInput"}/>
                </label>
                <label className={"UserDataLabel"} >
                    Portfolio Link:
                    <input type="text" name="PortfolioLink" value={formData.PortfolioLink} onChange={handleChange} className={"UserDataInput"}/>
                </label>
                <label className={"UserDataLabel"} >
                    location:
                    <input type="text" name="location" value={formData.location} onChange={handleChange} className={"UserDataInput"}/>
                </label>
                <Button type="submit" text="Save" />
            </form>
        </div>
    );
};

export default UserData;
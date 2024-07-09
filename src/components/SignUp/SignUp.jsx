import React,{useState} from 'react';
import HomeNav from "../Home/HomeNav/HomeNav";
import './SignUp.css';
import Input from "../../reusable/Input/Input.jsx";
import Button from "../../reusable/Button/Button.jsx";
const SignUp = () => {
    const [signUpData, setSignUpData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        verifyPassword: ""
    });

    const handleInput = (e) => {
        setSignUpData({
            ...signUpData,
            [e.target.id]: e.target.value
        });
        console.log(signUpData);
    }

    const handleFormSubmit = (e) => {
        if(signUpData.password !== signUpData.verifyPassword){
            alert("Passwords do not match");
            return;
        }
        if(signUpData.name === "" || signUpData.username === "" || signUpData.email === "" || signUpData.password === "" || signUpData.verifyPassword === ""){
            alert("All fields are required");
            return;
        }
        console.log("Form Submitted");
    }
    return (
        <div>
            <HomeNav/>
            <div className={"signUpContainer"}>
            <h1 className={"signUpTitle"}>SignUp</h1>
            <div className={"signUpContainer"}>
                <Input type={"text"} placeholder={"Full Name"} onChange={handleInput} id={"name"}/>
                <Input type={"text"} placeholder={"Username"} onChange={handleInput} id={"username"} />
                <Input type={"email"} placeholder={"Email"} onChange={handleInput} id={"email"}/>
                <Input type={"password"} placeholder={"Password"} onChange={handleInput} id={"password"} />
                <Input type={"password"} placeholder={"Confirm Password"} onChange={handleInput} id={"verifyPassword"}/>
                <Button text={"SignUp"} onClick={handleFormSubmit}/>
            </div>

            </div>

        </div>
    );
};

export default SignUp;

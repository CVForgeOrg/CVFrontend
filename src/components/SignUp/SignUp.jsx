import React,{useState} from 'react';
import HomeNav from "../Home/HomeNav/HomeNav";
import './SignUp.css';
import Input from "../../reusable/Input/Input.jsx";
import Button from "../../reusable/Button/Button.jsx";
import {auth} from "../../Firebase.js";
import {  createUserWithEmailAndPassword   } from 'firebase/auth';
import {apiPost} from "../../Api.js";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const [signUpData, setSignUpData] = useState({
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
        if(signUpData.username === "" || signUpData.email === "" || signUpData.password === "" || signUpData.verifyPassword === ""){
            alert("All fields are required");
            return;
        }
        createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                let payload = {
                    user_id: user.uid,
                    user_email: signUpData.email,
                }
                apiPost('databaseSaving/newUser/', payload)
                    .then(response => {
                        console.log('Response:', response);
                        navigate("/login");
                    }).catch(error => {
                    console.error('Error:', error);
                });
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });
        console.log("Form Submitted");
    }
    return (
        <div>
            <HomeNav/>
            <div className={"signUpContainer"}>
            <h1 className={"signUpTitle"}>SignUp</h1>
            <div className={"signUpContainer"}>
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

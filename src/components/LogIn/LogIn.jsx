import React, {useState} from 'react';
import HomeNav from "../Home/HomeNav/HomeNav";
import './LogIn.css';
import Input from "../../reusable/Input/Input.jsx";
import Button from "../../reusable/Button/Button.jsx";
import {useNavigate} from "react-router-dom";
import {auth} from "../../Firebase.js";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
const LogIn = () => {
    const navigate = useNavigate();
    const [logInData, setLogInData] = useState({
        email: "",
        password: ""
    });

    const onLogin = async (e) => {
        e.preventDefault()
        console.log(logInData)
        signInWithEmailAndPassword(auth, logInData.email, logInData.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/dashboard");
            })
            .catch((error) => {
                console.log(error);

            });


    }

    const handleSignUp = () => {
        navigate("/signup");
    }
    const handleInput = (e) => {
        console.log(e.target.id);
        setLogInData({
            ...logInData,
            [e.target.id]: e.target.value
        });
        console.log(logInData);
    }
    const handleLogIn = () => {
        console.log(logInData);
    }
    return (
        <div>
            <HomeNav/>
            <h1>LogIn</h1>
            <div className={"logInContainer"}>
                <Input type={"text"} placeholder={"email"} onChange={handleInput} id={"email"} />
                <Input type={"password"} placeholder={"Password"} onChange={handleInput} id={"password"} />
                <Button text={"LogIn"} onClick={onLogin}/>
            </div>
            <div>
                <p>Don't have an account?</p>
                <Button text={"SignUp"} onClick={handleSignUp}/>
            </div>
        </div>
    );
};

export default LogIn;
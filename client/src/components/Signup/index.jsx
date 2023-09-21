import "./style.css";
import img from "../Login/image.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { sendLoginRequest } from "./service";

function Signup (){

    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState(null);
    const [PasswordError, setPasswordError] = useState(null);
    const [usernameError, setUsernameError] = useState(null);

    const [, setCookie] = useCookies();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log({ username, password, email });

        if(email === ''){
            setEmailError('Please enter a valid email');
            return;
        }

        if(password === '' || password.length < 8) {
            setPasswordError('Please enter a valid password');
            return;
        }

        if(username === ''){
            setUsernameError('Please enter a valid username');
            return;
        }

        const response = await sendLoginRequest({ email, password, name: username });
        if(response.error === false) {
            setCookie('token', response.data.token);
            navigate('/home');
        } else {
            setEmailError(response.data.message);
        }
    }

    const handleEmailInput = (event) => {
        setEmail(event.target.value);
        setEmailError(null);
        setPasswordError(null);
    };
    
    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
        setEmailError(null);
        setPasswordError(null);
    };

    const handleUserameInput = (event) => {
        setUsername(event.target.value);
        setEmailError(null);
        setUsernameError(null);
        setPasswordError(null);
    }

    return (
        <>
            <section className="container">
                <div className="login-container">
                    <div className="circle circle-one"></div>
                    <div className="form-container">
                        <img src={img} alt="illustration" className="illustration" />
                        <h1 className="opacity">Sign Up</h1>
                        <form onSubmit={handleSubmit}>

                            <input type="email"
                                placeholder="EMAIL"
                                name="email"
                                value={ email }
                                onChange={handleEmailInput}
                            />
                            {emailError ?? <div className="email error">{emailError}</div> }

                            <input type="text"
                                placeholder="USERNAME"
                                name="name"
                                value={ username }
                                onChange={handleUserameInput}
                            />
                            {usernameError ?? <div className="email error">{usernameError}</div> }

                            <input
                                type="password"
                                placeholder="PASSWORD"
                                name="password"
                                id="passwordInput"
                                value={ password }
                                onChange={handlePasswordInput}
                            />
                            {PasswordError ?? <div className="email error">{PasswordError}</div> }
                            
                            <button type="submit" className="opacity">Sign Up</button>
                            <div className="register-forget opacity">
                                <a href="/login">Login</a>
                            </div>
                        </form>
                    </div>
                    <div className="circle circle-two"></div>
                </div>
                <div className="theme-btn-container"></div>
            </section>
        </>
    );
}

export default Signup;

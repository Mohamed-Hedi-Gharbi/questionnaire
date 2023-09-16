import "./style.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { sendLoginRequest } from "./service";

function Login (){
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState(null);
    const [PasswordError, setPasswordError] = useState(null);

    const [, setCookie] = useCookies();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(email === ''){
            setEmailError('Please enter a valid email');
            return;
        }

        if(password === '' || password.length < 8) {
            setPasswordError('Please enter a valid password');
            return;
        }

        const response = await sendLoginRequest({ email, password });
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
    

    return (
        <>
            <section className="container">
                <div className="login-container">
                    <div className="circle circle-one"></div>
                    <div className="form-container">
                        <img src="image.png" alt="illustration" className="illustration" />
                        <h1 className="opacity">LOGIN</h1>
                        <form id="login-form" onSubmit={handleSubmit}>
                            <input type="email"
                                placeholder="EMAIL"
                                name="email"
                                value={ email }
                                onChange={handleEmailInput}
                            />
                            {emailError ?? <div className="email error">{emailError}</div> }
                            <input
                                type="password"
                                placeholder="PASSWORD"
                                name="password"
                                id="passwordInput"
                                value={ password }
                                onChange={handlePasswordInput}
                            />
                            {PasswordError ?? <div className="email error">{PasswordError}</div> }
                            <button type="submit" className="opacity">SUBMIT</button>
                        </form>
                        <div className="register-forget opacity">
                            <a href="/signup">s'incrire</a>
                        </div>
                    </div>
                    <div className="circle circle-two"></div>
                </div>
                <div className="theme-btn-container"></div>
            </section>
        </>
    );
}

export default Login;

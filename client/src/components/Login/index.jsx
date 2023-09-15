import "./style.css";

import { base_url } from "../../config";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";

function Login (){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookie, setCookie] = useCookies();

    const handleSubmit = e => {
        e.preventDefault();

        const options = {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(base_url + '/auth/login', options)
            .then(res => res.json())
            .then(data => {
                if(data.token) {
                    setCookie('token', data.token);
                    navigate('/home');
                }
            })
            .catch(err => console.log({ err }));

        setPassword('');
        setEmail('');
    }


    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    };
    
    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    };

    useEffect(() => { 
        if(cookie.token !== undefined){
            navigate('/home');
        }
    }, []);
    

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
                            <div className="email error"></div>
                            <div className="password error"></div>                   
                            <input
                                type="password"
                                placeholder="PASSWORD"
                                name="password"
                                id="passwordInput"
                                value={ password }
                                onChange={handlePasswordInput}
                            />
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

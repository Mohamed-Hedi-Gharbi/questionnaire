import "./style.css";

import { useEffect } from "react";
import { isUserAuthenticate, logout } from "./service";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Main from "../Main";

function Home() {
    const [cookies, setCookie] = useCookies('token');
    const navigate = useNavigate();

    useEffect(() => {
        if(cookies.token){
            console.log({ cookies });
            isUserAuthenticate(cookies.token).then(isAuthenticate => {
                if (isAuthenticate === false) {
                    setCookie('token', '', { expires: new Date(0)});
                    navigate('/login');
                }
            })
        }
        
    });

    function handleLogout() {
        logout().then(() => setCookie('token', '', { expires: new Date(0)} ));

        navigate('/home');
    }

    return (
        <>
            <Main />            
            <div className="logoutButton" onClick={handleLogout}>
                <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 8.75L19.25 12L15.75 15.25"></path>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 12H10.75"></path>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H15.25"></path>
                </svg>
            </div>
        </>
    );
}

export default Home;

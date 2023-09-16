import "./style.css";

import { useEffect } from "react";
import { isUserAuthenticate } from "./service";
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

    return (
        <Main />            
    );
}

export default Home;

import { useNavigate } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";
import { useEffect } from "react";


function Home() {
    const navigate = useNavigate();
    const [cookie, setCookie] = useCookies();
    
    useEffect(() => { 
        if(cookie.token === undefined){
            navigate('/login');
        }
    }, []);
    
    return (
        <p>Hi</p>
    );
}

export default Home;

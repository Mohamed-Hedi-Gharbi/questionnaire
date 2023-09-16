import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
    const [cookie, ] = useCookies();
    
  return (
    cookie.token !== undefined ? <Outlet /> : <Navigate to="/login" /> 
  )
}

export default PrivateRoutes;
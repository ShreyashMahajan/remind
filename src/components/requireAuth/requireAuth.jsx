import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/authContext/authContext";


export const RequiresAuth = ({ children }) => {
    const { isUserLoggedIn } = useAuth();

    const location = useLocation();
    return isUserLoggedIn ? (children) :
        (<Navigate to='/login' state={{ from: location }} replace />)
}
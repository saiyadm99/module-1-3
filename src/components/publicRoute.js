import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRoute = ({children}) => {
	const isLoggedIn = useAuth();
	return (
		!isLoggedIn ? children : <Navigate to='/teams' />
	)
}

export default PublicRoute;
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";
import PublicRoute from "./components/publicRoute";
import useAuthCheck from "./hooks/useAuthCheck";
import Login from "./pages/Login";
import Projects from "./pages/projectsPage";
import TeamsPage from "./pages/teamsPage";

function App() {

	const authChecked = useAuthCheck();
	
	return !authChecked ? <div>Checking authentication...</div> : (
		<Router>
			<Routes>
				<Route 
					path="/" 
					element={
						<PublicRoute>
							<Login />
						</PublicRoute>	
					} 
				/>

				<Route 
					path="/teams" 
					element={
						<PrivateRoute>
							<TeamsPage/>
						</PrivateRoute>	
					} 
				/>

				<Route 
					path="/projects" 
					element={
						<PrivateRoute>
							<Projects/>
						</PrivateRoute>	
					} 
				/>
			</Routes>
		</Router>
	)
}

export default App;

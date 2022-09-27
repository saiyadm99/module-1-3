import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logo.png"
import { userLoggedOut } from "../../features/auth/authSlice";

const TeamsHeader = () => {
	const dispatch = useDispatch();

	const {user: loggedInUser} = useSelector(state => state.auth) || {};
	const {email: myEmail} = loggedInUser || {};

	const logout = () => {
		dispatch(userLoggedOut());
		localStorage.clear();
	}

	return(
		<div
				className="flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75"
		>
			<img src={logoImage} className="h-10 w-10" alt="logo" />
			<div className="ml-10">
				<Link
					
					className="mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700"
					to="/projects"
				>
					Projects
				</Link>
				<Link
					className="mx-2 text-sm font-semibold text-indigo-700"
					to="/teams"
				>
					Team
				</Link>
			</div>
			<ul>
				<li className="mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700">
					<span
						className="cursor-pointer"
						onClick={logout}
					>Logout</span>
				</li>
			</ul>
			<button
					className="flex items-center justify-center w-8 h-8 ml-auto overflow-hidden rounded-full cursor-pointer"
			>
				<img
					src={`https://robohash.org/${myEmail}?size=200x200`}
					alt="team-img"
				/>
			</button>
		</div>
	)
}

export default TeamsHeader;
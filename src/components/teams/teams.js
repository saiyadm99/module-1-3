import { useSelector } from "react-redux";
import { useGetTeamsQuery } from "../../features/teams/teamsApi";
import Error from "../ui/Error";
import Team from "./team";


const Teams = () => {
	// get logged in user data
	const {user} = useSelector(state => state.auth) || {};
	const { email: myEmail} = user || {};

	const {data: teams, isLoading, isError, error} = useGetTeamsQuery({myEmail});

	// decide what to render 	
	let content = null;

	if(isLoading) {
		content = <div>Loading...</div>
	} else if (!isLoading && isError) {
		content = <div> <Error message={error?.error} /> </div>
	} else if (!isLoading && !isError && teams.length ===0 ) {
		content = <div>No Teams found!</div>
	} else if(!isLoading && !isError && teams.length> 0) {
		content = (
			teams.map((team) => {
				return (
					<Team key={team.id} team={team} />
				)
			})
		)
	}

	return (
		content
	)
}

export default Teams;
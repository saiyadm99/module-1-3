import { useState } from "react";
import Footer from "../components/footer";
import AddTeamModal from "../components/teams/addTeamModal";
import Teams from "../components/teams/teams";
import TeamsHeader from "../components/teams/teamsHeader";


const TeamsPage = () => {

	const [opened, setOpened] = useState(false);

	const controlModal = () => {
			setOpened((prevState) => !prevState);
	};

	return (
		<>
			<div
					className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200"
			>
				<TeamsHeader />
				
				<div className="px-10 mt-6 flex justify-between">
					<h1 className="text-2xl font-bold">Teams</h1>
					<button
						onClick={controlModal}
						className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100"
					>
						<svg
							className="w-5 h-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 6v6m0 0v6m0-6h6m-6 0H6"
							></path>
						</svg>
					</button>
				</div>
				<div
					className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-10 mt-4 gap-6 overflow-auto"
				>
					< Teams/>
				</div>
			</div>
			
			<AddTeamModal open={opened} control={controlModal}/>

			<Footer />
		</>
	)
}

export default TeamsPage;

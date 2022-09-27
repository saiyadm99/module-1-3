import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAddProjectsMutation } from "../../features/projects/projectsApi";
import Error from "../ui/Error";

const AddProjectModal = ({ open, control }) => {

	const [team, setTeam] = useState("");
	const [title, setTitle ] = useState("");
	const [color, setColor] = useState("");

	const [responseError, setResponseError] = useState('');
	
	const [ addProject ] = useAddProjectsMutation();

	const {user} = useSelector(state => state.auth) || {};
	const { email: myEmail} = user || {};

	var currentDate = new Date();
	var date = currentDate.getDate();
	var month = currentDate.getMonth(); 
	var year = currentDate.getFullYear();
	var monthDateYear  = (month+1) + "/" + date + "/" + year;


	const handleSubmit = (e) => {
		e.preventDefault();
		addProject({
			data: {
				team: team,
				title: title,
				creator: user,
				stage: "Backlog",
				timestamp: monthDateYear,
			}
		})
		control();
	}

	return (
		open && (
			<>
				<div
					onClick={control}
					className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
				></div>
				<div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
						<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
								Create Project
						</h2>
						<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
							<div className="rounded-md shadow-sm -space-y-px">
								<div>
									<label htmlFor="name" className="ml-1">
										Team Name
									</label>
									<input
										id="team"
										name="team"
										type="text"
										required
										className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
										placeholder="Enter Team Name"
										value={team}
										onChange={(e) => setTeam(e.target.value)}
									/>
								</div>
							</div>

							<div>
								<label htmlFor="title" className="ml-1">
										Project Title
								</label>
								<textarea
									id="title"
									name="title"
									type="text"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
									placeholder="Enter Title"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>
							</div>

							<div>
								<button
									type="submit"
									className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
									disabled={false}
								>
									Add Project
								</button>

							</div>

							{responseError && (<Error message={responseError} />)}
						</form>
				</div>
			</>
		)
	);
}

export default AddProjectModal;
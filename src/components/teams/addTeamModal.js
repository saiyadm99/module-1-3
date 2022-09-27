import { useState } from "react";
import { useSelector } from "react-redux";
import { useAddTeamMutation } from "../../features/teams/teamsApi";
import Error from "../ui/Error";

const AddTeamModal = ({ open, control }) => {

	const [name, setName] = useState("");
	const [title, setTitle ] = useState("");
	const [color, setColor] = useState("");

	const [responseError, setResponseError] = useState('');

	const {user} = useSelector(state => state.auth) || {};
	const { email: myEmail} = user || {};
	const [addTeam ] = useAddTeamMutation();

	var currentDate = new Date();
	var date = currentDate.getDate();
	var month = currentDate.getMonth(); 
	var year = currentDate.getFullYear();

	var monthDateYear  = (month+1) + "/" + date + "/" + year;


	const handleSubmit = (e) => {
		e.preventDefault();
		addTeam({
			data: {
				name: name,
				title: title,
				color: color,
				creator: user,
				members: [myEmail],
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
								Create Team
						</h2>
						<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
							<div className="rounded-md shadow-sm -space-y-px">
								<div>
									<label htmlFor="name" className="ml-1">
										Name
									</label>
									<input
										id="name"
										name="name"
										type="text"
										required
										className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
										placeholder="Enter Team Name"
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
							</div>

							<div>
								<label htmlFor="title" className="ml-1">
										Title
								</label>
								<textarea
									id="title"
									name="title"
									type="text"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
									placeholder="Team Title"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>
							</div>

							<div>
								<label htmlFor="message" className="ml-1">
										Color
								</label>
								<input
									id="color"
									name="color"
									type="text"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
									placeholder="Give any valid color name"
									value={color}
									onChange={(e) => setColor(e.target.value)}
								/>
							</div>

							<div>
								<button
									type="submit"
									className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
									disabled={false}
								>
									Add Team
								</button>

							</div>

							{responseError && (<Error message={responseError} />)}
						</form>
				</div>
			</>
		)
	);
}

export default AddTeamModal;
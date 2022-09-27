import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAddProjectsMutation, useDeleteProjectMutation } from "../../features/projects/projectsApi";
import Error from "../ui/Error";

const DeleteProjectModal = ({ open, control, id }) => {

	const [team, setTeam] = useState("");
	const [title, setTitle ] = useState("");
	const [color, setColor] = useState("");

	const [responseError, setResponseError] = useState('');
	
	const [ addProject ] = useAddProjectsMutation();

	const [deleteProject] = useDeleteProjectMutation();

	const {user} = useSelector(state => state.auth) || {};
	const { email: myEmail} = user || {};

	const handleDelete = () => {
		deleteProject({
			id: id
		})

		control()
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
								Delete Project
						</h2>
						<div>
								<button
									type="submit"
									className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
									disabled={false}
									onClick={handleDelete}
								>
									Delete Project
								</button>

							</div>
				</div>
			</>
		)
	);
}

export default DeleteProjectModal;
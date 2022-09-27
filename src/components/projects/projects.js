import { useState } from "react";
import AddProjectModal from "./addProjectModal";
import Project from "./project";

const Projects = ({projects, stage}) => {

	const filteredProjects = projects?.filter((project) => project.stage === stage)

	const [opened, setOpened] = useState(false);

	const controlModal = () => {
			setOpened((prevState) => !prevState);
	};
	
	return (
		<>
		<div className="flex flex-col flex-shrink-0 w-72">
			<div className="flex items-center flex-shrink-0 h-10 px-2">
				<span className="block text-sm font-semibold">{stage}</span>
				<span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
					{filteredProjects?.length}
				</span>
				{stage === "Backlog" && (
					<button 
						className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100"
						onClick={controlModal}
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
				)}
			</div>
			<div className="flex flex-col pb-2 overflow-auto">
				{
					filteredProjects?.map((project) => {
						return (
							<Project key={project.id} project={project} stage={stage}/>
						)
					})
				}
			</div>
		</div>
		<AddProjectModal open={opened} control={controlModal} />
		</>
	)
}

export default Projects;
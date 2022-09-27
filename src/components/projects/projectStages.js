import { useGetProjectsQuery } from "../../features/projects/projectsApi";
import Error from "../ui/Error";
import Projects from "./projects";


const ProjectStages = () => {

	const {data : projects, isLoading, isError, error } = useGetProjectsQuery();

	// decide what to render
	let content = null;

	if(isLoading) {
		content = <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">Loading...</div>
	} else if (!isLoading && isError) {
		content = <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto"> <Error message={error?.error} /> </div>
	} else if (!isLoading && !isError && projects.length ===0 ) {
		content = <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">No Projects found!</div>
	} else if(!isLoading && !isError && projects.length> 0) {
		content = (
			<div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
				<Projects projects={projects} stage={'Backlog'} />
				<Projects projects={projects} stage={'Ready'} />
				<Projects projects={projects} stage={'Doing'} />
				<Projects projects={projects} stage={'Review'} />
				<Projects projects={projects} stage={'Blocked'} />
				<Projects projects={projects} stage={'Done'} />
		
				<div className="flex-shrink-0 w-6"></div>
			</div>

		)
	}

	//console.log(projects)

	return (
		content
	)
}

export default ProjectStages;
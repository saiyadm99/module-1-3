import Footer from "../components/footer";
import ProjectHeader from "../components/projects/projectsHeader";
import ProjectStages from "../components/projects/projectStages";

const Projects = () => {
  return (
    <>
      <div className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
       
				<ProjectHeader />

        <div className="px-10 mt-6">
          <h1 className="text-2xl font-bold">Project Board</h1>
        </div>
				
				<ProjectStages />
				
      </div>

      <Footer />
    </>
  );
};

export default Projects;


import Pagination from "../components/ui/pagination";
import Tags from "../components/tags/tags";
import VideoGrid from "../components/grid/videoGrid";

const Home = () => {
	return(
		<>
			<Tags />

			<VideoGrid />

			<Pagination />
		</>
	)
}

export default Home;
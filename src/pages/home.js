

import Footer from "../components/footer/footer";
import Navigation from "../components/navBar/navBar";
import Pagination from "../components/ui/pagination";
import Tags from "../components/tags/tags";
import VideoGrid from "../components/grid/videoGrid";

const Home = () => {
	return(
		<>
			<Navigation />

			<Tags />

			<VideoGrid />

			<Pagination />

			
			<Footer />
		</>
	)
}

export default Home;
import VideoGridItem from "./videoGridItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchVideos } from "../../features/videos/videosSlice";
import Loading from "../ui/loading";

const VideoGrid = () => {
	const dispatch = useDispatch();
	const {videos, isLoading, isError, error} = useSelector((state) => state.videos);

	const {tags, search} = useSelector(state => state.filter)

	useEffect(() => {
		dispatch(fetchVideos({tags, search}));
	}, [dispatch, tags, search]);

	// decide what ot render
	let content;
	if(isLoading) content = <Loading />;
	if(!isLoading && isError) content = <div className="col-span-12">{error}</div>

	if(!isError && !isLoading && videos?.length === 0) {
		content = <div className="col-span-12">No Videos Found!</div>
	}

	if(!isError && !isLoading && videos?.length > 0) {
		content = videos.map( video => {
			return(
				<VideoGridItem key={video.id} video={video} />
			)
		})
	}

	return (
		<section className="pt-12">
			<section className="pt-12">
				<div
					className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
				>
					{content}

					{/* error section
					<div className="col-span-12">some error happened</div>  */}
				</div>
			</section>
		</section>
	)
}

export default VideoGrid;
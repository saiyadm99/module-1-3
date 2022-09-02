import axiosInstance from "../../axios"
import tagsSlice from "../tags/tagsSlice";

export const getVideos = async (tags, search) => {
	let queryString = '';

	if(tagsSlice.length > 0 ){
		queryString += tags.map(tag => `tags_like=${tag}`).join("&");
	}

	if(search !== '') {
		queryString += `&q=${search}`;
	}

	const response = await axiosInstance.get(`/videos/?${queryString}`);

	return response.data;
} 
import { configureStore } from '@reduxjs/toolkit';
import tagsSlice from '../features/tags/tagsSlice';
import videosReducer from '../features/videos/videosSlice';
import videoReducer from '../features/video/videoSlice';
import relatedVideosReducer from '../features/relatedVideos/relatedVideosSlice'
import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    videos: videosReducer,
		tags: tagsSlice,
		video: videoReducer,
		relatedVideos: relatedVideosReducer,
		filter: filterReducer,
  },
});

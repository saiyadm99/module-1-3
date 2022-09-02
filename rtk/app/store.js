const configureStore = require("@reduxjs/toolkit").configureStore;
const postReducer = require("../features/post/postSlice")
const relatedPostReducer = require("../features/relatedPosts/relatedPostsSlice")

const {createLogger} = require("redux-logger");

const logger = createLogger();

// configure store
const store = configureStore({
	reducer: {
		post: postReducer,
		relatedPost: relatedPostReducer,
	}
});

module.exports = store;


	// middleware: (getDEfaultMiddlewares) => {
	// 	return getDEfaultMiddlewares().concat(logger)
	// }


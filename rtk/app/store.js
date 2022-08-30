const configureStore = require("@reduxjs/toolkit").configureStore;
const counterReducer = require("../features/counter/counterSlice")

const dynamicCounterReducer = require("../features/dynamicCounter/dynamicCounterSlice")
const postReducer = require("../features/dynamicCounter/dynamicCounterSlice")

const {createLogger} = require("redux-logger");

const logger = createLogger();

// configure store
const store = configureStore({
	reducer: {
		counter: counterReducer,
		dynamicCounter: dynamicCounterReducer,
		post: postReducer,
	},
	middleware: (getDEfaultMiddlewares) => {
		return getDEfaultMiddlewares().concat(logger)
	}
});

module.exports = store;



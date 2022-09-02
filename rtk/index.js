const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice")

const {dynamicCcounterActions} = require("./features/dynamicCounter/dynamicCounterSlice")

const {fetchPosts} = require("./features/post/postSlice")

const {fetchRelatedPosts} = require("./features/relatedPosts/relatedPostsSlice")
const title = "qui est esse";
// subscribe to state changes


const ss = store.subscribe(() => {
	const title = store.getState().post.posts.title;
	if(title) {
		console.log(title)
	}

	const relatedPost = store.getState().relatedPost
	if(relatedPost){
		console.log(relatedPost);
	}
	
});

//console.log(ss)

store.dispatch(fetchPosts());
store.dispatch(fetchRelatedPosts(title));


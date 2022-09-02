const store = require("./app/store");

const {fetchPosts} = require("./features/post/postSlice")

const {fetchRelatedPosts} = require("./features/relatedPosts/relatedPostsSlice")

let value ;

 store.subscribe(() => {
	const title = store.getState().post.posts.title;
	if(title) {
		
		value = title
		console.log(title)
	}

	const relatedPost = store.getState().relatedPost
	if(relatedPost){
		console.log(relatedPost);
	}
	
});

store.dispatch(fetchPosts());

const delay = () => {
	store.dispatch(fetchRelatedPosts(value))
}

const myTimeout = setTimeout(delay, 1000);
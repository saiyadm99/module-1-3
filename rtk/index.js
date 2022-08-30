const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice")

const {dynamicCcounterActions} = require("./features/dynamicCounter/dynamicCounterSlice")

const {fetchPosts} = require("./features/post/postSlice")

// subscribe to state changes
store.subscribe(() => {
    //console.log(store.getState());
});

// disptach actions
// store.dispatch(counterActions.increment());

// store.dispatch(counterActions.increment());

// store.dispatch(counterActions.decrement());

store.dispatch(fetchPosts());

store.dispatch(dynamicCcounterActions.increment(4));

store.dispatch(dynamicCcounterActions.decrement(2));
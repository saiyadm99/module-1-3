import { edit } from "../actions";

const editTodo = (todoId, text) => {
	return async (dispatch, getState) => {
		const response = await fetch(`https://lwsjson.herokuapp.com/todos/${todoId}`, {
			method: 'PATCH',
			body: JSON.stringify({
				text: text,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		});
		const todo = await response.json();
		console.log(`hi ${todo.text}`)
	
		dispatch(edit(todo.id, todo.text));
	}
}

export default editTodo;  
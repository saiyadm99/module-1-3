import { added } from "../actions";

const addTodo = (todoText) => {
	return async (dispatch, getState) => {
		const response = await fetch('http://localhost:9000/todos', {
			method: 'POST',
			body: JSON.stringify({
				text: todoText,
				completed: false,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		});
		const todo = await response.json();
		console.log(`hi ${todo.text}`)
	
		dispatch(added(todo.text));
	}
}

export default addTodo;  
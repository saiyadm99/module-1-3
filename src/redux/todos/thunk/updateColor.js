import { colorSelected } from "../actions";

const updateColor = (todoId, color) => {
	return async (dispatch, getState) => {
		const response = await fetch(`https://lwsjson.herokuapp.com/todos/${todoId}`, {
			method: 'PATCH',
			body: JSON.stringify({
				color: color,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		});
		const todo = await response.json();
		console.log(`hi ${todo.text}`)
	
		dispatch(colorSelected(todo.id, todo.color));
	}
}

export default updateColor;  
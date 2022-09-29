import { deleted } from "../actions";

const deleteTodo = (todoId) => {
	return async (dispatch, getState) => {
		await fetch(`https://lwsjson.herokuapp.com/todos/${todoId}`, {
			method: 'DELETE',
		});

		dispatch(deleted(todoId));
	}
}

export default deleteTodo;  
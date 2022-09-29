import initialState from "./initialState"
import { ADDED, COLORSELECTED, DELETED, TOGGLED, LOADED, EDIT } from "./actionTypes"

const nextTodoId = (todos) => {
	const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)

	return maxId + 1;
}

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADED:
			return action.payload;

			case ADDED:
				return [
					...state,
					{
						id: nextTodoId(state),
						text: action.payload,
						completed: false,
					}
				]

			case TOGGLED:
				return state.map(todo => {
					if(todo.id !== action.payload) {
						return todo;
					} else {
						return {
							...todo,
							completed: !todo.completed,
						}
					} 
				});

			case COLORSELECTED: 
				const {todoId, color} = action.payload;

				return state.map(todo => {
					if(todo.id !== todoId) {
						return todo;
					} else {
						return{
							...todo,
							color: color,
						}
					}
				});

				case EDIT:
				return state.map(todo => {
					if(todo.id !== action.payload.todoId) {
						return todo;
					} else {
						return {
							...todo,
							text: action.payload.text,
						}
					} 
				});
				

			case DELETED:
				return state.filter(todo => {
					return todo.id !== action.payload
				});
			
			default:
				return state;	
	}
}

export default todoReducer;
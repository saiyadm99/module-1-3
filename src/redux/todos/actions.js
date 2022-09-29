import { ADDED, COLORSELECTED, DELETED, TOGGLED, LOADED, EDIT } from "./actionTypes"

export const loaded = (todos) => {
	return {
		 type: LOADED,
		 payload: todos
	}
}

export const added = (todoText) => {
	return {
		 type: ADDED,
		 payload: todoText
	}
}

export const toggled = (todoId) => {
	return {
		type: TOGGLED,
		payload: todoId
	}
}

export const colorSelected = (todoId, color) => {
	return {
		type: COLORSELECTED,
		payload: {
			todoId: todoId,
			color: color
		}
	}
}

export const edit = (todoId, text) => {
	return {
		type: EDIT,
		payload: {
			todoId: todoId,
			text: text
		}
	}
}

export const deleted = (todoId) => {
	return {
		 type: DELETED,
		 payload: todoId
	}
}
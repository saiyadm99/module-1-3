import cancleImage from "../assets/images/cancel.png";
import deleteimage from "../assets/images/notes.png";
import { useDeleteTodosMutation, useEditTodoMutation } from "../features/api/apiSlice";
import { useState } from "react";
 
const Todo = ({todo}) => {

	const [ input, setInput ] = useState(todo.text);
	const [ ediMode, setEditMode  ] = useState(false);

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	const {text, id, completed, color} = todo;

	const[deleteTodo] = useDeleteTodosMutation();
	const[editTodo] = useEditTodoMutation();

	const handleStatusChange = (todoId) => {
		if(completed){
			editTodo({
				id: todoId,
				data: {
					completed: false,
				}
			})
		}else{
			editTodo({
				id: todoId,
				data: {
					completed: true,
				}
			})
		}
	}

	const handleColorChange = (todoId, color) => {
		editTodo({
			id: todoId,
			data: {
				color: color,
			}
		})
	}

	const handleDelete = (todoId) => {
		deleteTodo(todoId);
	}

	const submitHandler = (e) => {
		e.preventDefault();
		editTodo({
			id: id,
			data: {
				text: input,
			}
		})
		setInput('');
		setEditMode(false)
	}

	return(
		<div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
			<div className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${completed && 'border-green-500 focus-within:border-green-500'} `}>
					<input
							type="checkbox"
							className="opacity-0 absolute rounded-full"
							checked={completed}
							onChange={() => handleStatusChange(id)}
							
					/>
					{completed && <svg
							className="fill-current w-3 h-3 text-green-500 pointer-events-none"
							viewBox="0 0 20 20"
					>
							<path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
					</svg>}
			</div>

			{!ediMode
			? <div className={`select-none flex-1 ${completed && 'line-through'}`}>
					{text}
				</div> 
			:<form className="select-none flex-1" onSubmit={submitHandler}>
				<input
					type="text"
					placeholder="Edit your todo"
					className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
					value={input}
					onChange={handleInput}
				/>
			</form> }

			

			<div className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500  ${color === "green" && "bg-green-500"}`} 
			onClick={() => handleColorChange(id, 'green' )}
			></div>

			<div className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500 ${color === "yellow" && "bg-yellow-500"}`} 
			onClick={() => handleColorChange(id, 'yellow' )}
			>
			</div>

			<div className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500 ${color === "red" && "bg-red-500"}`} 
			onClick={() => handleColorChange(id, 'red' )}
			>
			</div>

			<img
					src={cancleImage}
					className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
					alt="Cancel"
					onClick={() => handleDelete(id)}
			/>
			<img
					src={deleteimage}
					className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
					alt="Cancel"
					onClick={() => setEditMode(!ediMode)}
			/>

	</div>
	)
}

export default Todo;
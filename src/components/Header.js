import { useState } from "react"
import noteImage from "../assets/images/notes.png"
import tickImage from "../assets/images/double-tick.png"
import plusImage from "../assets/images/plus.png"
import { useAddTodoMutation, useDeleteTodosMutation, useEditTodoMutation, useGetTodosQuery } from "../features/api/apiSlice"



const Header = () => {
	const [addTodo] = useAddTodoMutation()
	const [editTodo] = useEditTodoMutation();
	const {data: todos} = useGetTodosQuery();
	const[deleteTodo] = useDeleteTodosMutation();

	const [ input, setInput ] = useState('')

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		addTodo({
			text: input,
			completed: false,
		})
		setInput('');
	}
	

	const completeHandler = () => {
		todos?.forEach((todo) => {
			editTodo({
				id: todo.id,
				data: {
					completed: true,
				}
			})
		})
	}

	const clearHeandler = () => {
		const filteredCompleted = todos?.filter(todo => todo.completed)
		
		filteredCompleted.forEach((todo) => {
			deleteTodo(todo.id)
		})
	}

	return(
		<div>
			<form className="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={submitHandler}>
				<img
					src={noteImage}
					className="w-6 h-6"
					alt="Add todo"
				/>
				<input
					type="text"
					placeholder="Type your todo"
					className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
					value={input}
					onChange={handleInput}
				/>
				<button
					type="submit"
					className={`appearance-none w-8 h-8 bg-[url(${plusImage})] bg-no-repeat bg-contain`}
				>

				</button>
			</form>

			<ul className="flex justify-between my-4 text-xs text-gray-500">
				<li className="flex space-x-1 cursor-pointer" onClick={completeHandler}>
					<img
						className="w-4 h-4"
						src={tickImage}
						alt="Complete"
					/>
					<span>Complete All Tasks</span>
				</li>
				<li className="cursor-pointer" onClick={clearHeandler}>Clear completed</li>
			</ul>
		</div>
	)
}

export default Header;
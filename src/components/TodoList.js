import { useSelector } from "react-redux";
import { useGetTodosQuery } from "../features/api/apiSlice";
import Todo from "./Todo";

const TodoList = () => {
	
	const filters = useSelector((state) => state.filters);

	const {data: todos, isLoading, isError} = useGetTodosQuery()

	let content = null;

	if(isLoading){
		content = (<div>
			<h1>Loading...</h1>
		</div>)
	}

	if(!isLoading && isError){
		content = <div>
			<h1>error</h1>
		</div>
	}

	if(!isLoading && !isError && todos?.length >0){
		content = todos
		.filter(todo => {
			const { status } = filters;
			switch (status) {
				case 'Complete': 
					return todo.completed;
				case 'Incomplete': 
					return !todo.completed;
				default: 
					return true;	
			}
		})
		.filter(todo => {
			const {colors} = filters;
			if(colors?.length > 0) {
				return colors.includes(todo?.color)
			} 
			
			return true;
			
		 })
		.map(todo => <Todo todo={todo} key={todo.id} />);
	}

	return(content)
}

export default TodoList;
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import BottomTodoList from "./components/bottomTodoList";


function App() {
    return (
				<div
				className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
				
				<Navbar />
				

				<div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
						<Header />

						<hr className="mt-4" />

						<TodoList />

						
						<hr className="mt-4 mb-4" />

						<Footer />

						<hr className="mt-5 mb-5" />
						<h2 className="m-2">Completed Tasks</h2>
						<BottomTodoList />
				</div>
		</div>
  );
}

export default App;

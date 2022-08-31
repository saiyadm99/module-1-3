import Search from "./search";
import lwsImg from "../../assets/lws.svg"
import searchImage from "../../assets/search.svg"

const NavBar = () => {
	return (
		<nav className="bg-slate-100 shadow-md">
			<div
				className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
			>
				<a href="/">
					<img
						className="h-10"
						src={lwsImg}
						alt="Learn with Sumit"
					/>
				</a>
				<div
						className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
				>
					<Search />
					<img
							className="inline h-4 cursor-pointer"
							src={searchImage}
							alt="Search"
					/>
				</div>
			</div>
    </nav>
	)
}

export default NavBar;
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { changeSearch, changeType, resetFilter } from "../../features/transection/transactionSlice";

const Search = () => {
	const [type, setType] = useState('');
	const [search, setSearch] = useState('');
	
	
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(changeSearch(search));
	}, [search, dispatch])
	
	useEffect(() => {
		dispatch(changeType(type));
	}, [type, dispatch]);
	
	const handleReset = () => {
		dispatch(resetFilter());
		setType('');
		setSearch('');
	}
	
	return(
		<div>
			<div className="form-group radio">
					<label >Filter By</label>
					<div className="radio_group">
						<input
							required
							type="radio"
							value="income"
							name="type"
							checked={type === "income"}
							onChange={(e) => setType('income')}
						/>
						<label >Income</label>
					</div>
					<div className="radio_group">
						<input
							type="radio"
							value="expense"
							name="type"
							placeholder="Expense"
							checked={type === "expense"}
							onChange={(e) => setType('expense')}
						/>
						<label >Expense</label>
					</div>
			</div>
			<div className="">
				<input
					type="search"
					value={search}
					placeholder="Search"
					onChange={e => setSearch(e.target.value)}
				/>
				<button className='view-back-btn' onClick={handleReset}> Clear Filter </button> 
			</div>
		</div>
	)
}

export default Search
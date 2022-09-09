import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../features/transection/transactionSlice";
import PageListTransection from "./pageListTransaction";
import Pagination from "./pagination";

const PageListTransaction = () => {
	const dispatch = useDispatch();

	const { transactions, isLoading, isError } = useSelector(state => state.transaction);
	const {searchField, transactionType} = useSelector(state => state.transaction)
	
	const [currentPage, setCurrentPage] = useState([1]);
	const [postsPerPage, setPostPerPage] = useState([10]);

	useEffect(() => {
		dispatch(fetchTransactions());
	}, [dispatch]);

	
	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage
	
	const currentPost = transactions.slice(firstPostIndex, lastPostIndex)
	console.log(currentPost)

	// deside what to render
	let content = null;
	if(isLoading) {
		content = <p>Loading...</p>;
	}

	if(!isLoading && isError) {
		content = <p className="error">There was an error occured</p>
	}

	if(!isLoading && !isError && transactions?.length > 0) {
		content = currentPost
		.filter(transaction => transaction.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
		.filter(transaction => transactionType ? transaction.type === transactionType : true)
		.map(transaction => <PageListTransection key={transaction.id} transaction={transaction}/>)
	}

	if(!isLoading && !isError && transactions?.length === 0) {
		content = <p>No transactions found</p>
	}

	return (
		<>
			<p className="second_heading">Your Transactions:</p>

			<div className="conatiner_of_list_of_transactions">
				<ul>
					{content}
				</ul>
			</div>
			<Pagination 
				totalPosts={transactions.length} 
				postsPerPage={postsPerPage} 
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			/>
		</>
	)
}

export default PageListTransaction;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../features/transection/transactionSlice";
import Transection from "./transaction";

const Transactions = () => {
	const dispatch = useDispatch();

	const { transactions, isLoading, isError } = useSelector(state => state.transaction);

	const latestTransaction = transactions.slice(Math.max(transactions.length - 5, 0));

	useEffect(() => {
		dispatch(fetchTransactions());
	}, [dispatch]);

	// deside what to render
	let content = null;
	if(isLoading) {
		content = <p>Loading...</p>;
	}

	if(!isLoading && isError) {
		content = <p className="error">There was an error occured</p>
	}

	if(!isLoading && !isError && transactions?.length > 0) {
		content = latestTransaction.map(transaction => <Transection key={transaction.id} transaction={transaction}/>)
	}

	if(!isLoading && isError && transactions?.length === 0) {
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
		</>
	)
}

export default Transactions;
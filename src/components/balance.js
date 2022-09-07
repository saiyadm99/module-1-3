import { useSelector } from "react-redux";
import numberWithCommas from "../utils/numberWithCommas";

const Balance = () => {
	
	const {transactions} = useSelector(state => state.transaction)

	
	const calculateAmount = () => {
		let totalAmount = 0;
		transactions.forEach(transaction => {
			if(transaction.type === 'income') {
				totalAmount = totalAmount + transaction.amount;
			} else {
				totalAmount = totalAmount - transaction.amount;
			}
		})
		return totalAmount;
	}

	return (
		<div className="top_card">
			<p>Your Current Balance</p>
			<h3>
				<span>{`৳ `}</span>
				{(transactions.length > 0) ? <span>{`${numberWithCommas(calculateAmount())}`}</span> : 0 }
			</h3>
		</div>
	) 
}

export default Balance;
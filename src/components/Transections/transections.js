import Transection from "./transaction";

const Transactions = () => {
	return (
		<>
			<p className="second_heading">Your Transactions:</p>

			<div className="conatiner_of_list_of_transactions">
				<ul>
					<Transection />
				</ul>
			</div>
		</>
	)
}

export default Transactions;
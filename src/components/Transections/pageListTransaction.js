import editImage from "../../images/edit.svg"
import deleteImage from "../../images/delete.svg"
import { useDispatch } from "react-redux";
import { pageListEditActive, removeTransaction } from "../../features/transection/transactionSlice";
import numberWithCommas from "../../utils/numberWithCommas";

const PageListTransection = ({transaction}) => {
	const {name, amount, type, id} = transaction || {};
	const dispatch = useDispatch();

	const handleEdit = () => {
		dispatch(pageListEditActive(transaction))
	}

	const handleDelete = () => {
		dispatch(removeTransaction(id))
	}


	return (
		<li className={`transaction ${type}`}>
			<p>{name}</p>
			<div className="right">
				<p>{numberWithCommas(amount)}</p>
				<button className="link">
					<img
						onClick={handleEdit}
						className="icon"
						src={editImage}
						alt="edit"
					/>
				</button>
				<button className="link">
					<img
						onClick={handleDelete}
						className="icon"
						src={deleteImage}
						alt="delete"
					/>
				</button>
			</div>
		</li>
	)
}

export default PageListTransection;
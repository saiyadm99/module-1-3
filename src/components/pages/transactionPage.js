import { Link } from 'react-router-dom';
import PageListForm from '../filterForm';
import PageListTransaction from '../Transections/pageListTransactions';
import Search from '../Transections/search';


const TransactionPage = () => {
  return (
    <>
			<Link className='view-back-btn' to="/"> Back </Link> 
			
			<PageListForm />

			<Search />
			
			<PageListTransaction />
		</>	
  );
}

export default TransactionPage;

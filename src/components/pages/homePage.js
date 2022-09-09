import { Link } from 'react-router-dom';
import Balance from '../balance';
import Form from '../form';
import Transactions from '../Transections/transections';

const HomePage = () => {
  return (
    <>
			<Balance />

			<Form />
			
			<Transactions />

			<div className='view-back'>
				<Link className='view-back-btn' to="/transactions">
					View All...
				</Link>
			</div>       
		</>	
  );
}

export default HomePage;

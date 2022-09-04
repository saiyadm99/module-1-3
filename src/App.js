import React from 'react';
import Layout from './components/layout';
import Balance from './components/balance';
import Form from './components/form';
import Transactions from './components/Transections/transections';

function App() {
  return (
    <Layout>
			<Balance />

			<Form />

			<Transactions />
		</Layout>	
  );
}

export default App;

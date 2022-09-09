import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from './components/layout';
import HomePage from './components/pages/homePage';
import TransactionPage from './components/pages/transactionPage';

function App() {
  return (
		<Router >
			<Layout>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/transactions' element={<TransactionPage/>} />
				</Routes>
			</Layout>
		</Router>
  );
}

export default App;

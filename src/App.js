import React from 'react';
import Header from './components/Header';
import { Balance } from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import './App.css';
import { TransactionList } from './components/TransactionList';
import {Transaction}  from './components/Transaction';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses/>
          <TransactionList/>
          <AddTransaction/>
          </div>
        </GlobalProvider>
   
  );
}

export default App;

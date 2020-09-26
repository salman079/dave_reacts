import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [CashFlow, setCashflow] = useState();
  const [inflow, setInflow] = useState(0);
  const [outflow, setOutflow] = useState(0);
  const [nature, setNature] = useState("");
  const [trsflow, setTrsflow] = useState([]);

  const inputTxt = (e) => {
    setNature(e.target.value);
  }
  const inputValue = (e) => {
    setCashflow(e.target.value);
  }
  const indflow = (e) => {
    setInflow(inflow + parseInt(CashFlow, 10));
    // setBalance(inflow+outflow);
    setCashflow(0);
  }
  const outdflow = (e) => {
    setOutflow(outflow + parseInt(CashFlow, 10));
    // setBalance(inflow+outflow);
    setCashflow(0);
  }
  const cashdflow = (e) => {
    e.preventDefault();
    setTrsflow(trsflow => [...trsflow, { id: new Date().getTime(), desc: nature, amount: CashFlow }]);
    if (CashFlow > 0) {
      indflow();
    }
    else {
      outdflow();
    }
  }
  return (<>
    <div className="main-container">
      <h2 className='header'>Expense Tracker by Salman Siddiqui</h2>
      <div className="balance">
        <h3>Balance: <br /></h3>
        <h2>SR {inflow + outflow}</h2> <br />
      </div>
      <div className='in-ex-container'>
        <h4>Total Inflow <br />
        <div className="inflow">
          SR {inflow}
        </div>
        </h4>
        <h4>Total Outflow <br />
          <div className="outflow">
            SR {outflow}
          </div>
        </h4>
        <br />
      </div>
      <h2>Transaction History</h2><hr /><br />
      <ul className="transaction-list">
        {trsflow.map((transaction, ind) => {
          return (
            <li className="list" key={ind}>
              <span>{transaction.desc}</span>
              <span>{transaction.amount}</span>
            </li>)
        })}
      </ul>
      <br />
      <h2>Add New Transaction</h2>
      <form onSubmit={cashdflow} className="transaction-form">
        <label>Amount </label>
        <input
          type="number"
          placeholder="cash flow"
          onChange={inputValue}
          value={CashFlow}
          required
        /> <br />
        <label>Nature of transaction </label>
        <input
          type="text"
          placeholder="Natrue of transaction"
          onChange={inputTxt}
          value={nature}
          required
        /> <br />
        <button
          className="btn"
          type="submit" >
          Add Transaction  </button><br />
      </form>
    </div>
  </>
  )
};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
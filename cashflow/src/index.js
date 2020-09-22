import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [CashFlow, setCashflow] = React.useState();
  const [inflow, setInflow] = React.useState(0);
  const [outflow, setOutflow] = React.useState(0);
  const [nature, setNature] = React.useState("");
  const [trsflow, setTrsflow] = React.useState([]);
 
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
    setOutflow(outflow + parseInt(CashFlow, 10))
    // setBalance(inflow+outflow);
    setCashflow(0);
  }
  const cashdflow = (e) => {
    setTrsflow(trsflow.concat(nature+" of SR "+CashFlow));
    console.log(trsflow);
    if (CashFlow > 0) {
      indflow();
    }
    else {
      outdflow();
    }
  }
  return (<>
  <h1>Cash Flow</h1>
    Balance :SR {inflow+outflow} <br/> 
    Total Inflow :SR {inflow} <br />
    Total Outflow :SR {outflow} <br />
    <h1>Transaction History</h1><br/> <ul>{trsflow.map(city => <li key={city}>{city}</li>)}</ul> <br />
    <h2>Add New Transaction</h2>
    Amount <input type="number" placeholder="cash flow"
      onChange={inputValue}
      value={CashFlow}/> <br />
    Nature of transaction <input type="text" placeholder="Natrue of transaction"
      onChange={inputTxt}
      value={nature}/> <br />
    <button onClick={cashdflow}>
      Cashflows  </button><br />
  </>
  )
};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
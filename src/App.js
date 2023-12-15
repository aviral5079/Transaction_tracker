import "./App.css";
import { Header } from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import TransactionFilters from "./components/TransactionFilters";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="sidebar">
          <TransactionFilters />
          <AddTransaction />
        </div>
        <div className="mainbar">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
        </div>
      </div>
    </div>
  );
};

export default App;

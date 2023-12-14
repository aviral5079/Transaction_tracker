import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseListFilters from "./components/ExpenseListFilters";

function App() {
  return (
    <div className="App">
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
}

export default App;

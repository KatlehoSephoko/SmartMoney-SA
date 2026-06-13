import Navbar from "./components/Navbar";
import BudgetPlanner from "./components/BudgetPlanner";
import SavingsGoals from "./components/SavingsGoals";
import FinancialSimulator from "./components/FinancialSimulator";
import Gamification from "./components/Gamification";

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <BudgetPlanner />
        <SavingsGoals />
        <FinancialSimulator />
        <Gamification />
      </div>
    </>
  );
}

export default App;
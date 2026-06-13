import { useState } from "react";

function BudgetPlanner() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");

  const remaining = income - expenses;

  return (
    <div>
      <h2>Budget Planner</h2>

      <input
        type="number"
        placeholder="Income"
        onChange={(e) => setIncome(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Expenses"
        onChange={(e) => setExpenses(Number(e.target.value))}
      />

      <h3>Remaining Budget: R{remaining}</h3>
    </div>
  );
}

export default BudgetPlanner;
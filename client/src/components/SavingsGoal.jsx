import { useState } from "react";

function SavingsGoals() {
  const [goal, setGoal] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div>
      <h2>Savings Goal</h2>

      <input
        placeholder="Goal Name"
        onChange={(e) => setGoal(e.target.value)}
      />

      <input
        type="number"
        placeholder="Target Amount"
        onChange={(e) => setAmount(e.target.value)}
      />

      <button>Create Goal</button>

      <p>
        {goal}: R{amount}
      </p>
    </div>
  );
}

export default SavingsGoals;
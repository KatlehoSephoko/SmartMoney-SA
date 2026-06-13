import { useState } from "react";

function FinancialSimulator() {
  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");

  const futureValue =
    Number(amount) * Math.pow(1 + 0.08, Number(years));

  return (
    <div>
      <h2>Investment Simulator</h2>

      <input
        type="number"
        placeholder="Investment Amount"
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="number"
        placeholder="Years"
        onChange={(e) => setYears(e.target.value)}
      />

      <h3>
        Future Value: R{futureValue.toFixed(2)}
      </h3>
    </div>
  );
}

export default FinancialSimulator;
import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <!-- Navigation -->
    <div class="navbar">
      <div>
        <h1>SmartMoney-SA</h1>
        <p>Your Personal Finance Dashboard</p>
      </div>
      <div class="points" id="user-points">1,250 pts</div>
    </div>

    <!-- Statistics -->
    <div class="stats-grid">
      <div class="stat">
        <h3>Total Balance</h3>
        <p class="balance positive" id="total-balance">R 15,400</p>
      </div>
      <div class="stat">
        <h3>Gamification Level</h3>
        <p id="user-level">Novice Saver</p>
      </div>
      <div class="stat">
        <h3>Active Goals</h3>
        <p>1</p>
      </div>
    </div>

    <div class="dashboard-grid">
      <!-- Budget Planner / Quick Add -->
      <div class="card">
        <h2>Budget Planner</h2>
        <p style="font-size: 13px; color: #6b7280; margin-bottom: 15px;">Add deposits to earn points!</p>
        <div class="form-group">
          <label>Amount (ZAR)</label>
          <input type="number" id="transaction-amount" placeholder="Enter amount..." />
        </div>
        <div class="form-group">
          <label>Category</label>
          <select id="transaction-type">
            <option value="Deposit">Deposit</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
        <button id="add-transaction-btn">Add Transaction</button>
      </div>

      <!-- Savings Goals -->
      <div class="card">
        <h2>Savings Goals</h2>
        <div class="goal">
          <div class="goal-header">
            <h3>Emergency Fund (R 20,000)</h3>
          </div>
          <div class="progress-container">
            <div class="progress-bar" id="goal-bar" style="width: 77%;"></div>
          </div>
          <div class="progress-text" id="goal-text">77% Reached</div>
        </div>
      </div>
    </div>

    <!-- Financial Simulator -->
    <div class="card" style="margin-top: 20px;">
      <h2>Investment Simulator</h2>
      <p style="font-size: 14px; color: #374151;">See how your money grows over 5 years at an estimated 8% annual return.</p>
      <div class="form-group" style="margin-top: 15px;">
        <label>Monthly Contribution (ZAR)</label>
        <input type="number" id="sim-amount" placeholder="e.g. 500" />
      </div>
      <button class="secondary" id="simulate-btn" style="width: 100%;">Run Simulation</button>
      
      <div class="simulator-result" id="sim-result" style="display: none;">
        <h3>Future Value in 5 Years:</h3>
        <p class="amount positive" id="sim-display">R 0</p>
      </div>
    </div>

  </div>
`

/* ==========================================
   JAVASCRIPT LOGIC
   ========================================== */

// Initial State
let currentBalance = 15400;
let points = 1250;
let goalTarget = 20000;

// Elements
const balanceDisplay = document.getElementById('total-balance');
const amountInput = document.getElementById('transaction-amount');
const typeSelect = document.getElementById('transaction-type');
const addBtn = document.getElementById('add-transaction-btn');
const pointsDisplay = document.getElementById('user-points');
const levelDisplay = document.getElementById('user-level');
const goalBar = document.getElementById('goal-bar');
const goalText = document.getElementById('goal-text');

// 1. Budget Planner & Gamification Logic
addBtn.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount!");
    return;
  }

  if (typeSelect.value === 'Deposit') {
    currentBalance += amount;
    // Gamification: Earn points for depositing money
    points += 50; 
  } else {
    currentBalance -= amount;
  }

  // Update Balance
  balanceDisplay.textContent = 'R ' + currentBalance.toLocaleString();
  balanceDisplay.className = currentBalance >= 0 ? 'balance positive' : 'balance negative';

  // Update Points & Levels
  pointsDisplay.textContent = points.toLocaleString() + ' pts';
  if (points >= 1500) {
    levelDisplay.textContent = "Pro Saver 🏆";
    levelDisplay.style.color = "#15803d";
  }

  // Update Savings Goal (assuming balance goes to Emergency Fund)
  if (currentBalance >= 0) {
    let goalPercentage = (currentBalance / goalTarget) * 100;
    if (goalPercentage > 100) goalPercentage = 100; // Cap at 100%
    
    goalBar.style.width = goalPercentage + '%';
    goalText.textContent = Math.round(goalPercentage) + '% Reached';
  }

  amountInput.value = '';
});

// 2. Financial Simulator Logic
const simBtn = document.getElementById('simulate-btn');
const simAmountInput = document.getElementById('sim-amount');
const simResult = document.getElementById('sim-result');
const simDisplay = document.getElementById('sim-display');

simBtn.addEventListener('click', () => {
  const monthlyContribution = parseFloat(simAmountInput.value);
  
  if (isNaN(monthlyContribution) || monthlyContribution <= 0) {
    alert("Enter a valid monthly contribution.");
    return;
  }

  // Compound interest formula for monthly contributions over 5 years (60 months) at 8% annual
  const monthlyRate = 0.08 / 12;
  const months = 60;
  
  // Future Value of a Series formula
  const futureValue = monthlyContribution * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate));

  simDisplay.textContent = 'R ' + futureValue.toLocaleString(undefined, { maximumFractionDigits: 2 });
  simResult.style.display = 'block';
});

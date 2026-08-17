import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    
    <!-- Top Controls (Dark Mode) -->
    <div class="top-controls">
      <button id="theme-toggle" class="theme-btn">🌙 Dark Mode</button>
    </div>

    <!-- Navigation (Centered) -->
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
        <p id="user-level" style="font-weight: bold; color: #374151; font-size: 20px;">Novice Saver</p>
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
          <label>Type</label>
          <select id="transaction-type">
            <option value="Deposit">Income / Deposit (+)</option>
            <option value="Expense">Expense (-)</option>
          </select>
        </div>

        <div class="form-group">
          <label>Category</label>
          <select id="transaction-category">
            <option value="Salary / Savings">Salary / Savings</option>
            <option value="Transportation">Transportation</option>
            <option value="Accommodation & Rent">Accommodation & Rent</option>
            <option value="Takeout & Food">Takeout & Food</option>
            <option value="Tech & Hardware">Tech & Hardware</option>
            <option value="Sports & Leisure">Sports & Leisure</option>
            <option value="Holidays & Travel">Holidays & Travel</option>
          </select>
        </div>
        
        <button id="add-transaction-btn" style="width: 100%; margin-top: 5px;">Add Transaction</button>
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

    <!-- Recent Transactions List -->
    <div class="card" style="margin-top: 20px;">
      <h2>Recent Transactions</h2>
      <ul id="transaction-list" style="list-style: none; padding: 0; margin: 0;">
        <li id="empty-state" style="padding: 15px 0; color: #6b7280; font-style: italic; text-align: center;">
          No transactions yet. Add one above!
        </li>
      </ul>
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

let currentBalance = 15400;
let points = 1250;
let goalTarget = 20000;
let transactionCount = 0;

const balanceDisplay = document.getElementById('total-balance');
const amountInput = document.getElementById('transaction-amount');
const typeSelect = document.getElementById('transaction-type');
const categorySelect = document.getElementById('transaction-category');
const addBtn = document.getElementById('add-transaction-btn');
const pointsDisplay = document.getElementById('user-points');
const levelDisplay = document.getElementById('user-level');
const goalBar = document.getElementById('goal-bar');
const goalText = document.getElementById('goal-text');
const transactionList = document.getElementById('transaction-list');
const emptyState = document.getElementById('empty-state');
const themeToggleBtn = document.getElementById('theme-toggle');

// Dark Mode Toggle
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = '☀️ Light Mode';
  } else {
    themeToggleBtn.textContent = '🌙 Dark Mode';
  }
});

// Main Dashboard & Gamification Logic
addBtn.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount!");
    return;
  }

  const isDeposit = typeSelect.value === 'Deposit';
  const categoryName = categorySelect.value;

  if (isDeposit) {
    currentBalance += amount;
    points += 50; 
  } else {
    currentBalance -= amount;
  }

  balanceDisplay.textContent = 'R ' + currentBalance.toLocaleString();
  balanceDisplay.className = currentBalance >= 0 ? 'balance positive' : 'balance negative';

  pointsDisplay.textContent = points.toLocaleString() + ' pts';
  
  if (points >= 2000) {
    levelDisplay.textContent = "Financial Guru 👑";
    levelDisplay.style.color = "#8b5cf6"; 
  } else if (points >= 1800) {
    levelDisplay.textContent = "Master Investor 💎";
    levelDisplay.style.color = "#0ea5e9"; 
  } else if (points >= 1600) {
    levelDisplay.textContent = "Pro Saver 🏆";
    levelDisplay.style.color = "#15803d"; 
  } else if (points >= 1400) {
    levelDisplay.textContent = "Dedicated Saver ⭐";
    levelDisplay.style.color = "#d97706"; 
  } else {
    levelDisplay.textContent = "Novice Saver";
    levelDisplay.style.color = "#374151";
  }

  let goalPercentage = (currentBalance / goalTarget) * 100;
  if (currentBalance <= 0) goalPercentage = 0;
  if (goalPercentage > 100) goalPercentage = 100;
  goalBar.style.width = goalPercentage + '%';
  goalText.textContent = Math.round(goalPercentage) + '% Reached';

  if (transactionCount === 0 && emptyState) {
    emptyState.remove(); 
  }
  transactionCount++;

  const li = document.createElement('li');
  li.style.padding = '12px 0';
  li.style.borderBottom = '1px solid #e5e7eb';
  li.style.display = 'flex';
  li.style.justifyContent = 'space-between';
  li.style.alignItems = 'center';

  const amountColor = isDeposit ? '#15803d' : '#dc2626';
  const amountPrefix = isDeposit ? '+ R ' : '- R ';

  li.innerHTML = `
    <div>
      <strong style="color: #374151; font-size: 15px;">${categoryName}</strong>
      <div style="font-size: 12px; color: #6b7280; margin-top: 4px;">Just now</div>
    </div>
    <div style="font-weight: bold; color: ${amountColor};">
      ${amountPrefix}${amount.toLocaleString()}
    </div>
  `;

  transactionList.prepend(li);
  amountInput.value = '';
});

// Financial Simulator Logic
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

  const monthlyRate = 0.08 / 12;
  const months = 60;
  const futureValue = monthlyContribution * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate));

  simDisplay.textContent = 'R ' + futureValue.toLocaleString(undefined, { maximumFractionDigits: 2 });
  simResult.style.display = 'block';
});

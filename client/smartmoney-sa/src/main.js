import './style.css'

document.querySelector('#app').innerHTML = `
  
  <!-- Bank Card Transition Element -->
  <div id="bank-card-transition">
    <div class="card-chip"></div>
    <div class="card-number">**** **** **** 1250</div>
    <div class="card-name">SMARTMONEY SA</div>
  </div>

  <!-- Landing / Splash Screen -->
  <div id="splash-screen">
    <div class="logo-container">
      <!-- Your Custom Logo -->
      <img src="https://raw.githubusercontent.com/KatlehoSephoko/SmartMoney-SA/refs/heads/main/public/logo.PNG" alt="SmartMoney Logo" class="splash-logo" />
      <div>
        <span class="title-smart">Smart</span><span class="title-money">Money</span>
      </div>
      <p class="slogan">Making Smart Money Moves</p>
    </div>
    <button id="enter-app-btn" class="enter-btn">Open Dashboard</button>
  </div>

  <!-- Main Dashboard -->
  <div id="dashboard" class="container" style="display: none; opacity: 0; transition: opacity 0.4s ease;">
    
    <!-- Top Controls: Logo on Left, Toggle on Right -->
    <div class="top-controls">
      <!-- Your Custom Logo -->
      <img src="https://raw.githubusercontent.com/KatlehoSephoko/SmartMoney-SA/refs/heads/main/public/logo.PNG" alt="App Logo" class="top-logo" />

      <div class="theme-switch-wrapper">
        <span id="theme-label">Light Mode</span>
        <label class="switch">
          <input type="checkbox" id="theme-toggle">
          <span class="slider"></span>
        </label>
      </div>
    </div>

    <!-- Navigation -->
    <div class="navbar">
      <div>
        <h1>SmartMoney-SA</h1>
        <p>Your Personal Finance Dashboard</p>
      </div>
      <div class="points" id="user-points">0 pts</div>
    </div>

    <!-- Statistics -->
    <div class="stats-grid">
      <div class="stat">
        <h3>Total Balance</h3>
        <p class="balance positive" id="total-balance">R 0</p>
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
      
      <!-- Budget Planner -->
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
        
        <!-- Custom Goal Setter Form -->
        <div class="border-divider">
          <div class="form-group">
            <label>Goal Name</label>
            <input type="text" id="goal-name-input" placeholder="e.g. Dream Vacation" />
          </div>
          <div class="dashboard-grid" style="gap: 15px; margin-bottom: 15px;">
            <div class="form-group" style="margin-bottom: 0;">
              <label>Target (ZAR)</label>
              <input type="number" id="goal-target-input" placeholder="e.g. 50000" />
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label>Duration (Months)</label>
              <input type="number" id="goal-duration-input" placeholder="e.g. 12" />
            </div>
          </div>
          <button id="set-goal-btn" class="secondary" style="width: 100%;">Set New Goal</button>
        </div>

        <!-- Goal Progress Display -->
        <div class="goal">
          <div class="goal-header">
            <h3 id="goal-title-display">Emergency Fund (R 20,000)</h3>
          </div>
          <p style="font-size: 13px; color: #6b7280; margin-top: 5px; margin-bottom: 0;" id="goal-duration-display">Duration: Not set</p>
          <div class="progress-container">
            <div class="progress-bar" id="goal-bar" style="width: 0%;"></div>
          </div>
          <div class="progress-text" id="goal-text">0% Reached</div>
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

    <!-- Custom Financial Simulator -->
    <div class="card" style="margin-top: 20px;">
      <h2>Investment Simulator</h2>
      <p style="font-size: 14px; color: #374151; margin-bottom: 20px;">Calculate how your money grows over time.</p>
      
      <div class="dashboard-grid" style="gap: 15px; margin-bottom: 15px;">
        <div class="form-group" style="margin-bottom: 0;">
          <label>Contribution (ZAR)</label>
          <input type="number" id="sim-amount" placeholder="e.g. 500" />
        </div>
        <div class="form-group" style="margin-bottom: 0;">
          <label>Frequency</label>
          <select id="sim-frequency">
            <option value="12">Monthly</option>
            <option value="4">Quarterly</option>
            <option value="1">Annually</option>
          </select>
        </div>
      </div>

      <div class="dashboard-grid" style="gap: 15px; margin-bottom: 15px;">
        <div class="form-group" style="margin-bottom: 0;">
          <label>Interest Rate (%)</label>
          <input type="number" id="sim-rate" placeholder="e.g. 8" />
        </div>
        <div class="form-group" style="margin-bottom: 0;">
          <label>Duration (Years)</label>
          <input type="number" id="sim-years" placeholder="e.g. 5" />
        </div>
      </div>

      <div style="display: flex; gap: 10px; margin-top: 5px;">
        <button class="secondary" id="simulate-btn" style="flex: 2;">Run Simulation</button>
        <button class="danger" id="sim-clear-btn" style="flex: 1;">Clear</button>
      </div>
      
      <div class="simulator-result" id="sim-result" style="display: none;">
        <h3>Estimated Future Value:</h3>
        <p class="amount positive" id="sim-display">R 0</p>
      </div>
    </div>

  </div>
`

/* ==========================================
   JAVASCRIPT LOGIC
   ========================================== */

// --- Landing Page Bank Card Swipe Logic ---
const enterBtn = document.getElementById('enter-app-btn');
const bankCard = document.getElementById('bank-card-transition');
const splashScreen = document.getElementById('splash-screen');
const dashboard = document.getElementById('dashboard');

enterBtn.addEventListener('click', () => {
  bankCard.style.left = '50%';
  bankCard.style.transform = 'translate(-50%, -50%)';
  
  setTimeout(() => {
    splashScreen.style.opacity = '0';
    setTimeout(() => {
      splashScreen.style.display = 'none';
      dashboard.style.display = 'block';
      setTimeout(() => {
        dashboard.style.opacity = '1';
        bankCard.style.left = '150%';
      }, 50);
    }, 400); 
  }, 700); 
});

// --- Dashboard Logic ---
let currentBalance = 0;
let points = 0;
let goalTarget = 20000;
let transactionCount = 0;

const balanceDisplay = document.getElementById('total-balance');
const amountInput = document.getElementById('transaction-amount');
const typeSelect = document.getElementById('transaction-type');
const categorySelect = document.getElementById('transaction-category');
const addBtn = document.getElementById('add-transaction-btn');
const pointsDisplay = document.getElementById('user-points');
const levelDisplay = document.getElementById('user-level');
const transactionList = document.getElementById('transaction-list');
const emptyState = document.getElementById('empty-state');

// Goal Elements
const setGoalBtn = document.getElementById('set-goal-btn');
const goalNameInput = document.getElementById('goal-name-input');
const goalTargetInput = document.getElementById('goal-target-input');
const goalDurationInput = document.getElementById('goal-duration-input');
const goalTitleDisplay = document.getElementById('goal-title-display');
const goalDurationDisplay = document.getElementById('goal-duration-display');
const goalBar = document.getElementById('goal-bar');
const goalText = document.getElementById('goal-text');

// Theme Elements
const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');

themeToggle.addEventListener('change', (e) => {
  if(e.target.checked) {
    document.body.classList.add('dark-mode');
    themeLabel.textContent = 'Dark Mode';
  } else {
    document.body.classList.remove('dark-mode');
    themeLabel.textContent = 'Light Mode';
  }
});

// Function to calculate and update the progress bar
function updateGoalProgress() {
  let goalPercentage = (currentBalance / goalTarget) * 100;
  if (currentBalance <= 0) goalPercentage = 0;
  if (goalPercentage > 100) goalPercentage = 100;
  goalBar.style.width = goalPercentage + '%';
  goalText.textContent = Math.round(goalPercentage) + '% Reached';
}

// Set Custom Goal Logic
setGoalBtn.addEventListener('click', () => {
  const target = parseFloat(goalTargetInput.value);
  const name = goalNameInput.value || 'Custom Goal';
  const duration = goalDurationInput.value || '0';

  if (isNaN(target) || target <= 0) {
    alert('Please enter a valid target amount.');
    return;
  }

  goalTarget = target;
  goalTitleDisplay.textContent = `${name} (R ${target.toLocaleString()})`;
  goalDurationDisplay.textContent = `Duration: ${duration} Months`;

  updateGoalProgress(); 
  
  goalNameInput.value = '';
  goalTargetInput.value = '';
  goalDurationInput.value = '';
});

// Budget Planner & Gamification
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

  updateGoalProgress();

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

// Financial Simulator Logic (Updated to Simple Interest)
const simBtn = document.getElementById('simulate-btn');
const simClearBtn = document.getElementById('sim-clear-btn');
const simAmountInput = document.getElementById('sim-amount');
const simFreqInput = document.getElementById('sim-frequency');
const simRateInput = document.getElementById('sim-rate');
const simYearsInput = document.getElementById('sim-years');
const simResult = document.getElementById('sim-result');
const simDisplay = document.getElementById('sim-display');

simBtn.addEventListener('click', () => {
  const contribution = parseFloat(simAmountInput.value);
  const frequency = parseInt(simFreqInput.value); 
  const rate = parseFloat(simRateInput.value);
  const years = parseFloat(simYearsInput.value);

  if (isNaN(contribution) || contribution <= 0 || isNaN(rate) || rate <= 0 || isNaN(years) || years <= 0) {
    alert("Please ensure all simulation fields have valid numbers.");
    return;
  }

  const totalPeriods = years * frequency;
  const periodRate = (rate / 100) / frequency;
  
  // Total principal deposited out of pocket
  const totalPrincipal = contribution * totalPeriods;
  
  // Simple interest earned on all recurring contributions
  const totalInterest = contribution * periodRate * ((totalPeriods * (totalPeriods + 1)) / 2);
  
  const futureValue = totalPrincipal + totalInterest;

  simDisplay.textContent = 'R ' + futureValue.toLocaleString(undefined, { maximumFractionDigits: 2 });
  simResult.style.display = 'block';
});

simClearBtn.addEventListener('click', () => {
  simAmountInput.value = '';
  simFreqInput.value = '12';
  simRateInput.value = '';
  simYearsInput.value = '';
  simResult.style.display = 'none';
});

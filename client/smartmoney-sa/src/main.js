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
    
    <!-- Top Controls -->
    <div class="top-controls">
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
      <div style="text-align: right;">
        <div class="points" id="user-points">0 pts</div>
        <div id="reward-value" style="font-size: 14px; color: #a7f3d0; margin-top: 4px; font-weight: bold;">Reward Value: R 0.00</div>
      </div>
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
        <p style="font-size: 13px; color: #6b7280; margin-bottom: 15px;">Log deposits to earn points, but withdrawing costs points!</p>
        
        <div class="form-group">
          <label>Amount (ZAR)</label>
          <input type="number" id="transaction-amount" placeholder="Enter amount..." />
        </div>
        
        <div class="form-group">
          <label>Type</label>
          <select id="transaction-type">
            <option value="Deposit">Income / Deposit (+)</option>
            <option value="Expense">Expense / Withdrawal (-)</option>
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

      <!-- Side-Hustle & Gig Tracker -->
      <div class="card">
        <h2>Side-Hustle Hub 🚀</h2>
        <p style="font-size: 13px; color: #6b7280; margin-bottom: 15px;">Track pending freelance gigs, repairs, and commissions before they pay out.</p>
        
        <div class="border-divider">
          <div class="dashboard-grid" style="gap: 15px; margin-bottom: 15px;">
            <div class="form-group" style="margin-bottom: 0;">
              <label>Gig Name</label>
              <input type="text" id="gig-name-input" placeholder="e.g. Screen Repair" />
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label>Expected Payout</label>
              <input type="number" id="gig-amount-input" placeholder="e.g. 1500" />
            </div>
          </div>
          <button id="add-gig-btn" class="secondary" style="width: 100%;">Log Pending Gig</button>
        </div>

        <div>
          <h3 style="font-size: 15px; margin-bottom: 10px;">Pending Payouts</h3>
          <ul id="gig-list" style="list-style: none; padding: 0; margin: 0;">
            <li id="gig-empty-state" style="padding: 10px 0; color: #9ca3af; font-size: 13px; font-style: italic;">
              No pending gigs. Go secure the bag!
            </li>
          </ul>
        </div>
      </div>

    </div>

    <!-- Savings Goals -->
    <div class="card" style="margin-top: 20px;">
      <h2>Savings Goals & Rewards</h2>
      
      <div class="border-divider">
        <div class="form-group">
          <label>Goal Name</label>
          <input type="text" id="goal-name-input" placeholder="e.g. Dream Vacation" />
        </div>
        <div class="dashboard-grid" style="gap: 15px; margin-bottom: 15px;">
          <div class="form-group" style="margin-bottom: 0;">
            <label>Target (ZAR)</label>
            <input type="number" id="goal-target-input" placeholder="e.g. 10000" />
          </div>
          <div class="form-group" style="margin-bottom: 0;">
            <label>Duration (Months)</label>
            <input type="number" id="goal-duration-input" placeholder="e.g. 12" />
          </div>
        </div>
        <button id="set-goal-btn" class="secondary" style="width: 100%;">Set New Goal</button>
      </div>

      <div class="goal">
        <div class="goal-header">
          <h3 id="goal-title-display">Emergency Fund (R 20,000)</h3>
        </div>
        <p style="font-size: 13px; color: #6b7280; margin-top: 5px; margin-bottom: 0;" id="goal-duration-display">Duration: Not set</p>
        <p style="font-size: 14px; font-weight: bold; color: #15803d; margin-top: 4px; margin-bottom: 0;" id="goal-monthly-display">Minimum Monthly Deposit: R 0.00</p>
        
        <div class="progress-container">
          <div class="progress-bar" id="goal-bar" style="width: 0%;"></div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div class="progress-text" id="goal-text">0% Reached</div>
        </div>
        
        <button id="claim-reward-btn" style="width: 100%; margin-top: 15px; background: #9ca3af; cursor: not-allowed;" disabled>
          🔒 Claim Reward (Goal Not Reached)
        </button>
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

    <!-- Real-World Bank Savings Simulator -->
    <div class="card" style="margin-top: 20px;">
      <h2>Bank Savings Simulator</h2>
      <p style="font-size: 14px; color: #374151; margin-bottom: 20px;">Calculate exact monthly compound interest based on real banking plans.</p>
      
      <div class="dashboard-grid" style="gap: 15px; margin-bottom: 15px;">
        <div class="form-group" style="margin-bottom: 0;">
          <label>Account Type</label>
          <select id="sim-account-type">
            <option value="6.00">Access (Up to 6.00%)</option>
            <option value="7.25">Notice Deposit (Up to 7.25%)</option>
            <option value="7.00">Tax-free (Up to 7.00%)</option>
            <option value="8.25" selected>Fixed-term (Up to 8.25%)</option>
          </select>
        </div>
        <div class="form-group" style="margin-bottom: 0;">
          <label>Duration (Years)</label>
          <input type="number" id="sim-years" placeholder="e.g. 2" />
        </div>
      </div>

      <div class="dashboard-grid" style="gap: 15px; margin-bottom: 15px;">
        <div class="form-group" style="margin-bottom: 0;">
          <label>Initial Deposit (ZAR)</label>
          <input type="number" id="sim-initial" placeholder="e.g. 5000" />
        </div>
        <div class="form-group" style="margin-bottom: 0;">
          <label>Monthly Addition (Optional)</label>
          <input type="number" id="sim-monthly" placeholder="e.g. 500" />
        </div>
      </div>

      <div style="display: flex; gap: 10px; margin-top: 5px;">
        <button class="secondary" id="simulate-btn" style="flex: 2;">Run Bank Simulation</button>
        <button class="danger" id="sim-clear-btn" style="flex: 1;">Clear</button>
      </div>
      
      <div class="simulator-result" id="sim-result" style="display: none;">
        <h3>Estimated Future Value:</h3>
        <p class="amount positive" id="sim-display">R 0</p>
        <div id="sim-breakdown" style="font-size: 14px; color: #374151; margin-top: 10px; border-top: 1px solid rgba(0,0,0,0.1); padding-top: 10px;">
          <!-- Breakdown injected here -->
        </div>
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

// --- Dashboard State ---
let currentBalance = 0;
let points = 0;
let goalTarget = 20000;
let transactionCount = 0;
let gigCount = 0;

// Elements
const balanceDisplay = document.getElementById('total-balance');
const amountInput = document.getElementById('transaction-amount');
const typeSelect = document.getElementById('transaction-type');
const categorySelect = document.getElementById('transaction-category');
const addBtn = document.getElementById('add-transaction-btn');
const pointsDisplay = document.getElementById('user-points');
const rewardDisplay = document.getElementById('reward-value');
const levelDisplay = document.getElementById('user-level');
const transactionList = document.getElementById('transaction-list');
const emptyState = document.getElementById('empty-state');
const goalBar = document.getElementById('goal-bar');
const goalText = document.getElementById('goal-text');
const claimRewardBtn = document.getElementById('claim-reward-btn');

// Core Gamification & Balance Update Function
function processTransaction(amount, isDeposit, categoryName) {
  if (isDeposit) {
    currentBalance += amount;
    points += 50; 
  } else {
    currentBalance -= amount;
    // Penalty: Deduct 100 points for withdrawing money
    points -= 100;
    if (points < 0) points = 0; 
  }

  // Update Balance
  balanceDisplay.textContent = 'R ' + currentBalance.toLocaleString();
  balanceDisplay.className = currentBalance >= 0 ? 'balance positive' : 'balance negative';

  // Update Points & Reward Value (1 Point = R0.25)
  const rewardCash = points * 0.25;
  pointsDisplay.textContent = points.toLocaleString() + ' pts';
  rewardDisplay.textContent = 'Reward Value: R ' + rewardCash.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // Update Rank
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

  // Update Progress Goal
  updateGoalProgress();

  // Add to Recent Transactions List
  if (transactionCount === 0 && emptyState) emptyState.remove(); 
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
}

// Budget Planner Manual Submit
addBtn.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount!");
    return;
  }
  processTransaction(amount, typeSelect.value === 'Deposit', categorySelect.value);
  amountInput.value = '';
});

// Side-Hustle Tracker Logic
const addGigBtn = document.getElementById('add-gig-btn');
const gigNameInput = document.getElementById('gig-name-input');
const gigAmountInput = document.getElementById('gig-amount-input');
const gigList = document.getElementById('gig-list');
const gigEmptyState = document.getElementById('gig-empty-state');

addGigBtn.addEventListener('click', () => {
  const gigName = gigNameInput.value || 'Side Hustle';
  const gigAmount = parseFloat(gigAmountInput.value);

  if (isNaN(gigAmount) || gigAmount <= 0) {
    alert('Please enter a valid expected payout.');
    return;
  }

  if (gigCount === 0 && gigEmptyState) gigEmptyState.remove();
  gigCount++;

  const li = document.createElement('li');
  li.style.padding = '12px';
  li.style.background = '#fef3c7'; 
  li.style.borderRadius = '8px';
  li.style.marginBottom = '10px';
  li.style.display = 'flex';
  li.style.justifyContent = 'space-between';
  li.style.alignItems = 'center';

  li.innerHTML = `
    <div>
      <strong style="color: #92400e; font-size: 14px;">⏳ ${gigName}</strong>
      <div style="font-weight: bold; color: #b45309; margin-top: 4px;">R ${gigAmount.toLocaleString()}</div>
    </div>
    <button class="mark-paid-btn" style="background: #15803d; font-size: 12px; padding: 8px 12px;">Mark Paid</button>
  `;

  li.querySelector('.mark-paid-btn').addEventListener('click', () => {
    processTransaction(gigAmount, true, `Gig Payout: ${gigName}`);
    points += 100;
    const rewardCash = points * 0.25;
    pointsDisplay.textContent = points.toLocaleString() + ' pts';
    rewardDisplay.textContent = 'Reward Value: R ' + rewardCash.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    
    li.remove();
    gigCount--;
    if (gigCount === 0) gigList.appendChild(gigEmptyState);
  });

  gigList.prepend(li);
  gigNameInput.value = '';
  gigAmountInput.value = '';
});

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

// Goal Progress Function & Reward Logic
function updateGoalProgress() {
  let goalPercentage = (currentBalance / goalTarget) * 100;
  if (currentBalance <= 0) goalPercentage = 0;
  if (goalPercentage > 100) goalPercentage = 100;
  
  goalBar.style.width = goalPercentage + '%';
  goalText.textContent = Math.round(goalPercentage) + '% Reached';

  // Unlock Claim Reward Button if goal is reached
  if (goalPercentage >= 100) {
    const rewardCash = points * 0.25;
    claimRewardBtn.disabled = false;
    claimRewardBtn.style.background = '#16a34a'; // Green unlock color
    claimRewardBtn.style.cursor = 'pointer';
    claimRewardBtn.innerHTML = `🎁 Claim R ${rewardCash.toLocaleString(undefined, {minimumFractionDigits: 2})} Reward!`;
  } else {
    claimRewardBtn.disabled = true;
    claimRewardBtn.style.background = '#9ca3af'; // Locked gray color
    claimRewardBtn.style.cursor = 'not-allowed';
    claimRewardBtn.innerHTML = `🔒 Claim Reward (Goal Not Reached)`;
  }
}

// Claim Reward Button Logic
claimRewardBtn.addEventListener('click', () => {
  const rewardCash = points * 0.25;
  if (rewardCash > 0) {
    // Treat the reward as a normal income deposit
    processTransaction(rewardCash, true, '🏆 Goal Reward Payout');
    
    // Reset points after claiming
    points = 0;
    pointsDisplay.textContent = '0 pts';
    rewardDisplay.textContent = 'Reward Value: R 0.00';
    
    alert(`Congratulations! You achieved your goal and claimed R ${rewardCash.toLocaleString(undefined, {minimumFractionDigits: 2})} in rewards!`);
    updateGoalProgress(); // Re-evaluate button state
  } else {
    alert("You don't have any points to claim yet!");
  }
});

// Set Custom Goal
document.getElementById('set-goal-btn').addEventListener('click', () => {
  const goalTargetInput = document.getElementById('goal-target-input');
  const target = parseFloat(goalTargetInput.value);
  const name = document.getElementById('goal-name-input').value || 'Custom Goal';
  const duration = parseFloat(document.getElementById('goal-duration-input').value) || 0;

  if (isNaN(target) || target <= 0 || isNaN(duration) || duration <= 0) {
    alert('Please enter a valid target amount and duration (months).');
    return;
  }

  goalTarget = target;
  const monthlyMin = target / duration;

  document.getElementById('goal-title-display').textContent = `${name} (R ${target.toLocaleString()})`;
  document.getElementById('goal-duration-display').textContent = `Duration: ${duration} Months`;
  document.getElementById('goal-monthly-display').textContent = `Minimum Monthly Deposit: R ${monthlyMin.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

  updateGoalProgress(); 
  
  document.getElementById('goal-name-input').value = '';
  goalTargetInput.value = '';
  document.getElementById('goal-duration-input').value = '';
});

// Bank Simulator Logic
const simBtn = document.getElementById('simulate-btn');
const simClearBtn = document.getElementById('sim-clear-btn');
const simAccountType = document.getElementById('sim-account-type');
const simInitialInput = document.getElementById('sim-initial');
const simMonthlyInput = document.getElementById('sim-monthly');
const simYearsInput = document.getElementById('sim-years');
const simResult = document.getElementById('sim-result');
const simDisplay = document.getElementById('sim-display');
const simBreakdown = document.getElementById('sim-breakdown');

simBtn.addEventListener('click', () => {
  const annualRate = parseFloat(simAccountType.value) / 100;
  const initialDeposit = parseFloat(simInitialInput.value) || 0;
  const monthlyDeposit = parseFloat(simMonthlyInput.value) || 0;
  const years = parseFloat(simYearsInput.value);

  if ((initialDeposit <= 0 && monthlyDeposit <= 0) || isNaN(years) || years <= 0) {
    alert("Please ensure you enter a valid duration and at least one deposit amount.");
    return;
  }

  const months = years * 12;
  const monthlyRate = annualRate / 12;
  
  const principalCompound = initialDeposit * Math.pow(1 + monthlyRate, months);
  
  let contributionCompound = 0;
  if (monthlyDeposit > 0) {
    contributionCompound = monthlyDeposit * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
  }
  
  const futureValue = principalCompound + contributionCompound;
  
  const totalInvested = initialDeposit + (monthlyDeposit * months);
  const totalInterest = futureValue - totalInvested;

  simDisplay.textContent = 'R ' + futureValue.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 });
  
  simBreakdown.innerHTML = `
    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
      <span>Total Invested:</span>
      <strong>R ${totalInvested.toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong>
    </div>
    <div style="display: flex; justify-content: space-between; color: #15803d;">
      <span>Total Interest Earned:</span>
      <strong>+ R ${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong>
    </div>
  `;
  
  simResult.style.display = 'block';
});

simClearBtn.addEventListener('click', () => {
  simInitialInput.value = '';
  simMonthlyInput.value = '';
  simYearsInput.value = '';
  simResult.style.display = 'none';
});

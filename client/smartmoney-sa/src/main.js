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
        <p id="active-goals-count">1</p>
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

    <!-- Savings Goals (Multiple Goals Support) -->
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
        <button id="set-goal-btn" class="secondary" style="width: 100%;">Add New Goal</button>
      </div>

      <!-- Container for all dynamically generated goals -->
      <div id="goals-container"></div>

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
let transactionCount = 0;
let gigCount = 0;

// Array to hold multiple goals
let goals = [
  {
    id: Date.now(),
    name: 'Emergency Fund',
    target: 20000,
    duration: 0
  }
];

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
const goalsContainer = document.getElementById('goals-container');
const activeGoalsCount = document.getElementById('active-goals-count');


// --- Goals Rendering Logic ---
function renderGoals() {
  goalsContainer.innerHTML = ''; // Clear container
  activeGoalsCount.textContent = goals.length;

  if (goals.length === 0) {
    goalsContainer.innerHTML = '<p style="color: #6b7280; font-size: 14px; text-align: center; font-style: italic;">No active goals. Add one above to start earning rewards!</p>';
    return;
  }

  goals.forEach(goal => {
    let goalPercentage = (currentBalance / goal.target) * 100;
    if (currentBalance <= 0) goalPercentage = 0;
    if (goalPercentage > 100) goalPercentage = 100;
    
    const monthlyMin = goal.duration > 0 ? (goal.target / goal.duration) : 0;
    const isReached = goalPercentage >= 100;
    const rewardCash = points * 0.25;

    const goalElement = document.createElement('div');
    goalElement.className = 'goal';
    goalElement.innerHTML = `
      <div class="goal-header">
        <h3>${goal.name} (R ${goal.target.toLocaleString()})</h3>
        <button class="delete-goal-btn" data-id="${goal.id}" style="background: transparent; color: #ef4444; font-size: 20px; padding: 0; box-shadow: none;">&times;</button>
      </div>
      <p style="font-size: 13px; color: #6b7280; margin-top: 5px; margin-bottom: 0;">${goal.duration > 0 ? `Duration: ${goal.duration} Months` : 'Duration: Not set'}</p>
      ${monthlyMin > 0 ? `<p style="font-size: 14px; font-weight: bold; color: #15803d; margin-top: 4px; margin-bottom: 0;">Minimum Monthly Deposit: R ${monthlyMin.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>` : ''}
      
      <div class="progress-container">
        <div class="progress-bar" style="width: ${goalPercentage}%;"></div>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div class="progress-text">${Math.round(goalPercentage)}% Reached</div>
      </div>
      
      <button class="claim-reward-btn" data-id="${goal.id}" style="width: 100%; margin-top: 15px; background: ${isReached ? '#16a34a' : '#9ca3af'}; cursor: ${isReached ? 'pointer' : 'not-allowed'};" ${isReached ? '' : 'disabled'}>
        ${isReached ? `🎁 Claim R ${rewardCash.toLocaleString(undefined, {minimumFractionDigits: 2})} Reward!` : '🔒 Claim Reward (Goal Not Reached)'}
      </button>
    `;

    goalsContainer.appendChild(goalElement);
  });

  // Attach Event Listeners to the newly created buttons
  document.querySelectorAll('.delete-goal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.getAttribute('data-id'));
      goals = goals.filter(g => g.id !== id);
      renderGoals();
    });
  });

  document.querySelectorAll('.claim-reward-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const rewardCash = points * 0.25;
      if (rewardCash > 0) {
        processTransaction(rewardCash, true, '🏆 Goal Reward Payout');
        
        points = 0;
        pointsDisplay.textContent = '0 pts';
        rewardDisplay.textContent = 'Reward Value: R 0.00';
        
        alert(\`Congratulations! You achieved a goal and claimed R \${rewardCash.toLocaleString(undefined, {minimumFractionDigits: 2})} in rewards!\`);
        renderGoals(); // Refresh goals to lock buttons again if balance drops or to reset reward text
      } else {
        alert("You don't have any points to claim yet!");
      }
    });
  });
}

// Initial Render
renderGoals();


// --- Core Gamification & Balance Update Function ---
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

  // Update all Progress Goals
  renderGoals();

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

// Set Custom Goal (Pushing to Array)
document.getElementById('set-goal-btn').addEventListener('click', () => {
  const goalTargetInput = document.getElementById('goal-target-input');
  const target = parseFloat(goalTargetInput.value);
  const name = document.getElementById('goal-name-input').value || 'Custom Goal';
  const duration = parseFloat(document.getElementById('goal-duration-input').value) || 0;

  if (isNaN(target) || target <= 0) {
    alert('Please enter a valid target amount.');
    return;
  }

  // Add the new goal to the beginning of the list
  goals.unshift({
    id: Date.now(),
    name: name,
    target: target,
    duration: duration
  });

  renderGoals(); 
  
  // Clear the form
  document.getElementById('goal-name-input').value = '';
  goalTargetInput.value = '';
  document.getElementById('goal-duration-input').value = '';
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
    
    // Update goal button states since points changed
    renderGoals();

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

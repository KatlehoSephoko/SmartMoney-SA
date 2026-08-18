import './style.css'

// Professional SVG Icons
const icons = {
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  lock: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
  unlock: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>`,
  briefcase: `<svg class="icon-corporate" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
  trending: `<svg class="icon-corporate" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`
};

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
    <button id="enter-app-btn" class="enter-btn">${icons.lock} Access Dashboard</button>
  </div>

  <!-- Rewards Store Modal (Hidden by default) -->
  <div id="rewards-modal" class="modal-overlay">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Corporate Partner Rewards</h2>
        <button id="close-modal-btn" class="close-modal">&times;</button>
      </div>
      <p style="font-size: 13px; color: #64748b; margin-top: 0; margin-bottom: 15px;">Redeem your points for retail vouchers. 1 Point = R0.25</p>
      
      <div class="rewards-grid">
        <div class="reward-item">
          <div class="reward-info">
            <h4>TFG / Sportscene Voucher</h4>
            <p>Value: R200 | Cost: 800 pts</p>
          </div>
          <button class="secondary claim-store-btn" data-cost="800" data-value="200" data-name="TFG Voucher" style="width: auto;">Redeem</button>
        </div>
        
        <div class="reward-item">
          <div class="reward-info">
            <h4>Checkers Sixty60</h4>
            <p>Value: R100 | Cost: 400 pts</p>
          </div>
          <button class="secondary claim-store-btn" data-cost="400" data-value="100" data-name="Checkers Voucher" style="width: auto;">Redeem</button>
        </div>

        <div class="reward-item">
          <div class="reward-info">
            <h4>Takealot.com Voucher</h4>
            <p>Value: R50 | Cost: 200 pts</p>
          </div>
          <button class="secondary claim-store-btn" data-cost="200" data-value="50" data-name="Takealot Voucher" style="width: auto;">Redeem</button>
        </div>

        <div class="reward-item">
          <div class="reward-info">
            <h4>Direct Cash Deposit</h4>
            <p>Convert all available points to ZAR</p>
          </div>
          <button class="claim-cash-btn" style="width: auto; background: #064e3b;">Cash Out</button>
        </div>
      </div>
    </div>
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
          <span class="slider">
            <span class="slider-icon" id="theme-icon">${icons.sun}</span>
          </span>
        </label>
      </div>
    </div>

    <!-- Navigation -->
    <div class="navbar">
      <div>
        <h1>SmartMoney-SA</h1>
        <p>Personal Finance Management</p>
      </div>
      <div style="text-align: right;">
        <div class="points" id="user-points">0 pts</div>
        <div id="reward-value" style="font-size: 13px; color: #a7f3d0; margin-top: 4px; font-weight: 600;">Reward Value: R 0.00</div>
      </div>
    </div>

    <!-- Statistics -->
    <div class="stats-grid">
      <div class="stat">
        <h3>Total Balance</h3>
        <p class="balance positive" id="total-balance">R 0</p>
      </div>
      <div class="stat">
        <h3>User Tier</h3>
        <p id="user-level" style="color: #334155; font-size: 20px;">Standard</p>
      </div>
      <div class="stat">
        <h3>Active Goals</h3>
        <p id="active-goals-count">1</p>
      </div>
    </div>

    <div class="dashboard-grid">
      
      <!-- Budget Planner -->
      <div class="card">
        <div class="card-header">
          ${icons.trending}
          <h2>Transaction Log</h2>
        </div>
        <p style="font-size: 13px; color: #64748b; margin-bottom: 15px;">Log deposits to earn loyalty points.</p>
        
        <div class="form-group">
          <label>Amount (ZAR)</label>
          <input type="number" id="transaction-amount" placeholder="0.00" />
        </div>
        
        <div class="form-group">
          <label>Transaction Type</label>
          <select id="transaction-type">
            <option value="Deposit">Deposit (+)</option>
            <option value="Expense">Withdrawal (-)</option>
          </select>
        </div>

        <div class="form-group">
          <label>Category</label>
          <select id="transaction-category">
            <option value="Salary / Savings">Salary / Savings</option>
            <option value="Transportation">Transportation</option>
            <option value="Accommodation & Rent">Accommodation & Rent</option>
            <option value="Food & Dining">Food & Dining</option>
            <option value="Tech & Utilities">Tech & Utilities</option>
          </select>
        </div>
        
        <button id="add-transaction-btn" style="width: 100%; margin-top: 5px;">Submit Transaction</button>
      </div>

      <!-- Side-Hustle Tracker -->
      <div class="card">
        <div class="card-header">
          ${icons.briefcase}
          <h2>Pending Invoices</h2>
        </div>
        <p style="font-size: 13px; color: #64748b; margin-bottom: 15px;">Track outstanding gig economy payouts.</p>
        
        <div class="border-divider">
          <div class="dashboard-grid" style="gap: 15px; margin-bottom: 15px;">
            <div class="form-group" style="margin-bottom: 0;">
              <label>Client / Gig Name</label>
              <input type="text" id="gig-name-input" placeholder="e.g. IT Repair" />
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label>Expected ZAR</label>
              <input type="number" id="gig-amount-input" placeholder="0.00" />
            </div>
          </div>
          <button id="add-gig-btn" class="secondary" style="width: 100%;">Log Invoice</button>
        </div>

        <div>
          <h3 style="font-size: 14px; margin-bottom: 10px; color: #111827;">Outstanding Receivables</h3>
          <ul id="gig-list" style="list-style: none; padding: 0; margin: 0;">
            <li id="gig-empty-state" style="padding: 10px 0; color: #94a3b8; font-size: 13px; font-style: italic;">
              No pending invoices.
            </li>
          </ul>
        </div>
      </div>

    </div>

    <!-- Savings Goals -->
    <div class="card" style="margin-top: 20px;">
      <h2>Savings Portfolios</h2>
      
      <div class="border-divider">
        <div class="dashboard-grid" style="gap: 15px; margin-bottom: 15px;">
          <div class="form-group" style="margin-bottom: 0;">
            <label>Portfolio Name</label>
            <input type="text" id="goal-name-input" placeholder="e.g. Vehicle Fund" />
          </div>
          <div class="dashboard-grid" style="gap: 15px; margin-bottom: 0;">
            <div class="form-group" style="margin-bottom: 0;">
              <label>Target (ZAR)</label>
              <input type="number" id="goal-target-input" placeholder="10000" />
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label>Duration (Months)</label>
              <input type="number" id="goal-duration-input" placeholder="12" />
            </div>
          </div>
        </div>
        <button id="set-goal-btn" class="secondary" style="width: 100%; max-width: 200px;">Create Portfolio</button>
      </div>

      <div id="goals-container"></div>
    </div>

    <!-- Recent Transactions List -->
    <div class="card" style="margin-top: 20px;">
      <h2>Account History</h2>
      <ul id="transaction-list" style="list-style: none; padding: 0; margin: 0;">
        <li id="empty-state" style="padding: 15px 0; color: #94a3b8; font-style: italic; text-align: center; font-size: 14px;">
          No recent activity.
        </li>
      </ul>
    </div>

  </div>
`

/* ==========================================
   JAVASCRIPT LOGIC
   ========================================== */

// --- Cinematic Landing Page & Blur Logic ---
const enterBtn = document.getElementById('enter-app-btn');
const bankCard = document.getElementById('bank-card-transition');
const splashScreen = document.getElementById('splash-screen');
const dashboard = document.getElementById('dashboard');

enterBtn.addEventListener('click', () => {
  // 1. Move card to center
  bankCard.style.left = '50%';
  bankCard.style.transform = 'translate(-50%, -50%)';
  
  // 2. Wait for card to settle, then begin smooth cinematic exit
  setTimeout(() => {
    bankCard.style.left = '150%'; // Card exits right
    
    // Apply background blur to splash screen as it fades
    splashScreen.style.backdropFilter = 'blur(12px)';
    splashScreen.style.webkitBackdropFilter = 'blur(12px)';
    splashScreen.style.backgroundColor = 'rgba(244, 247, 245, 0.3)';
    
    // Trigger smooth fade out
    setTimeout(() => {
      splashScreen.style.opacity = '0';
      
      // Remove splash completely and show dashboard
      setTimeout(() => {
        splashScreen.style.display = 'none';
        dashboard.style.display = 'block';
        
        setTimeout(() => {
          dashboard.style.opacity = '1';
        }, 50);
      }, 800); 
    }, 400); 
  }, 1000); 
});


// --- State Management ---
let currentBalance = 0;
let points = 0;
let transactionCount = 0;
let gigCount = 0;

let goals = [
  {
    id: Date.now(),
    name: 'Emergency Fund',
    target: 20000,
    duration: 12
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

// Modal Elements
const rewardsModal = document.getElementById('rewards-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const claimStoreBtns = document.querySelectorAll('.claim-store-btn');
const claimCashBtn = document.querySelector('.claim-cash-btn');

// --- Goals Rendering Logic ---
function renderGoals() {
  goalsContainer.innerHTML = ''; 
  activeGoalsCount.textContent = goals.length;

  if (goals.length === 0) {
    goalsContainer.innerHTML = '<p style="color: #64748b; font-size: 14px; text-align: center; font-style: italic;">No active portfolios.</p>';
    return;
  }

  goals.forEach(goal => {
    let goalPercentage = (currentBalance / goal.target) * 100;
    if (currentBalance <= 0) goalPercentage = 0;
    if (goalPercentage > 100) goalPercentage = 100;
    
    const monthlyMin = goal.duration > 0 ? (goal.target / goal.duration) : 0;
    const isReached = goalPercentage >= 100;

    const goalElement = document.createElement('div');
    goalElement.className = 'goal';
    goalElement.innerHTML = `
      <div class="goal-header">
        <h3>${goal.name} (R ${goal.target.toLocaleString()})</h3>
        <button class="delete-goal-btn" data-id="${goal.id}" style="background: transparent; color: #ef4444; padding: 0;">&times;</button>
      </div>
      <p style="font-size: 13px; color: #64748b; margin-top: 5px; margin-bottom: 0;">${goal.duration > 0 ? `Term: ${goal.duration} Months` : 'Term: Open'}</p>
      ${monthlyMin > 0 ? `<p style="font-size: 13px; font-weight: 600; color: #15803d; margin-top: 4px; margin-bottom: 0;">Min. Deposit: R ${monthlyMin.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>` : ''}
      
      <div class="progress-container">
        <div class="progress-bar" style="width: ${goalPercentage}%;"></div>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div class="progress-text">${Math.round(goalPercentage)}% Reached</div>
      </div>
      
      <button class="open-store-btn" data-id="${goal.id}" style="width: 100%; margin-top: 15px; background: ${isReached ? '#16a34a' : '#9ca3af'};" ${isReached ? '' : 'disabled'}>
        ${isReached ? icons.unlock + ' Access Rewards Store' : icons.lock + ' Goal Locked'}
      </button>
    `;

    goalsContainer.appendChild(goalElement);
  });

  // Goal Deletion
  document.querySelectorAll('.delete-goal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.getAttribute('data-id'));
      goals = goals.filter(g => g.id !== id);
      renderGoals();
    });
  });

  // Open Rewards Store Modal
  document.querySelectorAll('.open-store-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      rewardsModal.classList.add('active');
    });
  });
}

// Initial Render
renderGoals();


// --- Rewards Store Logic ---

closeModalBtn.addEventListener('click', () => {
  rewardsModal.classList.remove('active');
});

// Retail Voucher Purchases
claimStoreBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const cost = parseInt(e.target.getAttribute('data-cost'));
    const value = parseInt(e.target.getAttribute('data-value'));
    const name = e.target.getAttribute('data-name');

    if (points >= cost) {
      points -= cost;
      updateHeaderPoints();
      rewardsModal.classList.remove('active');
      
      // Log it in transaction history as a reward redemption (doesn't change cash balance)
      logTransaction(0, true, `Redeemed: ${name}`, `#1d4ed8`);
      
      alert(`Success! Check your email for your R${value} ${name}. Remaining points: ${points}`);
      renderGoals();
    } else {
      alert(`Insufficient Points. You need ${cost} points, but only have ${points}.`);
    }
  });
});

// Direct Cash Out Logic
claimCashBtn.addEventListener('click', () => {
  const rewardCash = points * 0.25;
  if (rewardCash > 0) {
    processTransaction(rewardCash, true, 'Cash Reward Payout');
    points = 0;
    updateHeaderPoints();
    rewardsModal.classList.remove('active');
    alert(`Success! R ${rewardCash.toLocaleString(undefined, {minimumFractionDigits: 2})} has been deposited into your balance.`);
  } else {
    alert("You don't have any points to claim yet!");
  }
});

function updateHeaderPoints() {
  const rewardCash = points * 0.25;
  pointsDisplay.textContent = points.toLocaleString() + ' pts';
  rewardDisplay.textContent = 'Reward Value: R ' + rewardCash.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  
  if (points >= 2000) {
    levelDisplay.textContent = "Platinum";
    levelDisplay.style.color = "#8b5cf6"; 
  } else if (points >= 1500) {
    levelDisplay.textContent = "Gold";
    levelDisplay.style.color = "#ca8a04"; 
  } else if (points >= 800) {
    levelDisplay.textContent = "Silver";
    levelDisplay.style.color = "#94a3b8"; 
  } else {
    levelDisplay.textContent = "Standard";
    levelDisplay.style.color = "#334155";
  }
  renderGoals();
}

// --- Core Transaction & Logging Logic ---

function logTransaction(amount, isDeposit, categoryName, customColor = null) {
  if (transactionCount === 0 && emptyState) emptyState.remove(); 
  transactionCount++;

  const li = document.createElement('li');
  li.style.padding = '14px 0';
  li.style.borderBottom = '1px solid #e2e8f0';
  li.style.display = 'flex';
  li.style.justifyContent = 'space-between';
  li.style.alignItems = 'center';

  const amountColor = customColor ? customColor : (isDeposit ? '#15803d' : '#b91c1c');
  const amountPrefix = amount === 0 ? '' : (isDeposit ? '+ R ' : '- R ');

  li.innerHTML = `
    <div>
      <strong style="color: var(--text-color, #1e293b); font-size: 14px;">${categoryName}</strong>
      <div style="font-size: 12px; color: #64748b; margin-top: 4px;">Just now</div>
    </div>
    <div style="font-weight: 600; color: ${amountColor};">
      ${amountPrefix}${amount.toLocaleString(undefined, {minimumFractionDigits: 2})}
    </div>
  `;
  transactionList.prepend(li);
}

function processTransaction(amount, isDeposit, categoryName) {
  if (isDeposit) {
    currentBalance += amount;
    points += 50; 
  } else {
    currentBalance -= amount;
    points -= 100;
    if (points < 0) points = 0; 
  }

  balanceDisplay.textContent = 'R ' + currentBalance.toLocaleString(undefined, {minimumFractionDigits: 2});
  balanceDisplay.className = currentBalance >= 0 ? 'balance positive' : 'balance negative';

  updateHeaderPoints();
  logTransaction(amount, isDeposit, categoryName);
}

addBtn.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }
  processTransaction(amount, typeSelect.value === 'Deposit', categorySelect.value);
  amountInput.value = '';
});

// Add Goal
document.getElementById('set-goal-btn').addEventListener('click', () => {
  const target = parseFloat(document.getElementById('goal-target-input').value);
  const name = document.getElementById('goal-name-input').value || 'Portfolio';
  const duration = parseFloat(document.getElementById('goal-duration-input').value) || 0;

  if (isNaN(target) || target <= 0) {
    alert('Please enter a valid target amount.');
    return;
  }

  goals.push({ id: Date.now(), name: name, target: target, duration: duration });
  renderGoals(); 
  
  if (goalsContainer.lastElementChild) {
    goalsContainer.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  
  document.getElementById('goal-name-input').value = '';
  document.getElementById('goal-target-input').value = '';
  document.getElementById('goal-duration-input').value = '';
});

// Side-Hustle Tracker
const addGigBtn = document.getElementById('add-gig-btn');
const gigNameInput = document.getElementById('gig-name-input');
const gigAmountInput = document.getElementById('gig-amount-input');
const gigList = document.getElementById('gig-list');
const gigEmptyState = document.getElementById('gig-empty-state');

addGigBtn.addEventListener('click', () => {
  const gigName = gigNameInput.value || 'Invoice';
  const gigAmount = parseFloat(gigAmountInput.value);

  if (isNaN(gigAmount) || gigAmount <= 0) return;

  if (gigCount === 0 && gigEmptyState) gigEmptyState.remove();
  gigCount++;

  const li = document.createElement('li');
  li.style.padding = '14px';
  li.style.background = '#f1f5f9'; 
  li.style.border = '1px solid #e2e8f0';
  li.style.borderRadius = '8px';
  li.style.marginBottom = '10px';
  li.style.display = 'flex';
  li.style.justifyContent = 'space-between';
  li.style.alignItems = 'center';

  li.innerHTML = `
    <div>
      <strong style="color: #475569; font-size: 14px;">Pending: ${gigName}</strong>
      <div style="font-weight: 600; color: #0f172a; margin-top: 4px;">R ${gigAmount.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
    </div>
    <button class="mark-paid-btn" style="background: #15803d; font-size: 12px; padding: 8px 12px;">${icons.check} Cleared</button>
  `;

  li.querySelector('.mark-paid-btn').addEventListener('click', () => {
    processTransaction(gigAmount, true, `Invoice Cleared: ${gigName}`);
    points += 100;
    updateHeaderPoints();

    li.remove();
    gigCount--;
    if (gigCount === 0) gigList.appendChild(gigEmptyState);
  });

  gigList.prepend(li);
  gigNameInput.value = '';
  gigAmountInput.value = '';
});

// Theme Switcher (Updates SVG icon)
const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('change', (e) => {
  if(e.target.checked) {
    document.body.classList.add('dark-mode');
    themeLabel.textContent = 'Dark Mode';
    themeIcon.innerHTML = icons.moon;
  } else {
    document.body.classList.remove('dark-mode');
    themeLabel.textContent = 'Light Mode';
    themeIcon.innerHTML = icons.sun;
  }
});

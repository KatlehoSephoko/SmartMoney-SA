import './style.css'

// Professional SVG Icons
const icons = {
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  lock: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
  unlock: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>`,
  briefcase: `<svg class="icon-corporate" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
  trending: `<svg class="icon-corporate" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
  gift: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>`
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
    <div class="logo-container" id="logo-container">
      <img src="https://raw.githubusercontent.com/KatlehoSephoko/SmartMoney-SA/refs/heads/main/public/logo.PNG" alt="SmartMoney Logo" class="splash-logo" />
      <div>
        <span class="title-smart">Smart</span><span class="title-money">Money</span>
      </div>
      <p class="slogan">Making Smart Money Moves</p>
    </div>
    
    <!-- Auth Status Container -->
    <div id="auth-status" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: none; flex-direction: column; align-items: center; z-index: 10000; opacity: 0; transition: opacity 0.3s ease;">
       <div id="spinner" class="spinner"></div>
       <div id="success-tick" class="success-tick" style="display: none;">
         <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
       </div>
       <p id="auth-text" style="color: #111827; font-weight: 600; margin-top: 15px; font-size: 16px;">Authenticating...</p>
    </div>

    <button id="enter-app-btn" class="enter-btn" style="transition: opacity 0.3s ease;">${icons.lock} Access Dashboard</button>
  </div>

  <!-- Rewards Store Modal -->
  <div id="rewards-modal" class="modal-overlay">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Corporate Partner Rewards</h2>
        <button id="close-modal-btn" class="secondary" style="padding: 8px 16px; font-size: 14px;">Close</button>
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
          <button class="claim-cash-btn" style="width: auto; background: #064e3b; color: white;">Cash Out</button>
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

    <!-- Centered Navigation -->
    <div class="navbar">
      <div>
        <h1>SmartMoney-SA</h1>
        <p>Personal Finance Management</p>
      </div>
      <div class="points-container">
        <div class="points" id="user-points">0 pts</div>
        <div id="reward-value">Reward Value: R 0.00</div>
      </div>
      <button id="nav-open-rewards-btn" style="background: #10b981; color: white; margin-top: 10px;">${icons.gift} Open Rewards Store</button>
    </div>

    <!-- Statistics -->
    <div class="stats-grid">
      <div class="stat">
        <h3>Available Balance</h3>
        <p class="balance positive" id="total-balance">R 0</p>
      </div>
      <div class="stat">
        <h3>User Tier</h3>
        <p id="user-level" style="color: #334155; font-size: 20px;">Standard</p>
      </div>
      <div class="stat">
        <h3>Active Goals</h3>
        <p id="active-goals-count">0</p>
      </div>
    </div>

    <div class="dashboard-grid">
      
      <!-- Budget Planner -->
      <div class="card">
        <div class="card-header">
          ${icons.trending}
          <h2>Transaction Log</h2>
        </div>
        <p style="font-size: 13px; color: #64748b; margin-bottom: 15px;">Deposit your actual cash here to earn 50 base points. You must have an Available Balance before you can fund your portfolios.</p>
        
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
            <option value="Salary / General">Salary / General</option>
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
        <p style="font-size: 13px; color: #64748b; margin-bottom: 15px;">Track gig economy money owed to you. Once marked 'Cleared', it moves directly into your Available Balance.</p>
        
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
          <button id="add-gig-btn" style="width: 100%;">Log Invoice</button>
        </div>

        <div>
          <h3 class="section-subtitle">Outstanding Receivables</h3>
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
      <p style="font-size: 13px; color: #64748b; margin-bottom: 15px;">Deposit multiples of your target to scale points fast! Hit 100% to earn a 50pt completion bonus. You can withdraw funds back to main balance if needed.</p>
      
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
        <button id="set-goal-btn" style="width: 100%; max-width: 200px;">Create Portfolio</button>
      </div>

      <!-- Container for goals with active funding -->
      <div id="goals-container"></div>
    </div>

    <!-- Real-World Bank Savings Simulator -->
    <div class="card" style="margin-top: 20px;">
      <div class="card-header">
        ${icons.trending}
        <h2>Bank Savings Simulator</h2>
      </div>
      <p style="font-size: 13px; color: #64748b; margin-bottom: 20px;">Calculate exactly how your money would grow in real-world South African bank accounts using compound interest formulas.</p>
      
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
        <button id="simulate-btn" style="flex: 2;">Run Bank Simulation</button>
        <button class="secondary" id="sim-clear-btn" style="flex: 1;">Clear</button>
      </div>
      
      <div class="simulator-result" id="sim-result" style="display: none;">
        <h3>Estimated Future Value:</h3>
        <p class="balance positive" id="sim-display" style="margin-top: 5px; font-size: 24px;">R 0</p>
        <div id="sim-breakdown" style="font-size: 13px; color: #4b5563; margin-top: 10px; border-top: 1px solid rgba(0,0,0,0.1); padding-top: 10px;">
          <!-- Breakdown injected here -->
        </div>
      </div>
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
  bankCard.style.left = '50%';
  bankCard.style.transform = 'translate(-50%, -50%)';
  enterBtn.style.opacity = '0';
  enterBtn.style.pointerEvents = 'none';
  
  setTimeout(() => {
    document.getElementById('logo-container').style.opacity = '0';
    
    const authStatus = document.getElementById('auth-status');
    authStatus.style.display = 'flex';
    setTimeout(() => authStatus.style.opacity = '1', 50);

    bankCard.style.left = '150%'; 
    splashScreen.style.backdropFilter = 'blur(12px)';
    splashScreen.style.webkitBackdropFilter = 'blur(12px)';
    splashScreen.style.backgroundColor = 'rgba(244, 247, 245, 0.7)';
    
    setTimeout(() => {
      document.getElementById('spinner').style.display = 'none';
      document.getElementById('success-tick').style.display = 'block';
      document.getElementById('auth-text').textContent = 'Secure Connection Established';
      
      setTimeout(() => {
        splashScreen.style.opacity = '0';
        setTimeout(() => {
          splashScreen.style.display = 'none';
          dashboard.style.display = 'block';
          setTimeout(() => {
            dashboard.style.opacity = '1';
          }, 50);
        }, 800); 
      }, 800); 
    }, 1200); 
  }, 800); 
});


// --- State Management ---
let currentBalance = 0;
let points = 0;
let transactionCount = 0;
let gigCount = 0;

// Initialize with an empty array. No portfolios on load.
let goals = [];

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
const navOpenRewardsBtn = document.getElementById('nav-open-rewards-btn');


// --- Goals Rendering & Funding Logic ---
function renderGoals() {
  goalsContainer.innerHTML = ''; 
  activeGoalsCount.textContent = goals.length;

  if (goals.length === 0) {
    goalsContainer.innerHTML = '<p style="color: #64748b; font-size: 14px; text-align: center; font-style: italic;">No active portfolios. Create one above to start saving!</p>';
    return;
  }

  goals.forEach(goal => {
    let goalPercentage = (goal.saved / goal.target) * 100;
    if (goalPercentage > 100) goalPercentage = 100;
    
    const monthlyMin = goal.duration > 0 ? (goal.target / goal.duration) : 0;
    const isReached = goalPercentage >= 100;

    const goalElement = document.createElement('div');
    goalElement.className = 'goal';
    
    // Dynamic Button State based on zero points and completion
    let goalActionBtn = '';
    if (isReached) {
      if (points === 0) {
        goalActionBtn = `<button disabled style="width: 100%; margin-top: 15px; background: #9ca3af; cursor: not-allowed;">${icons.check} Reward Claimed (0 pts)</button>`;
      } else {
        goalActionBtn = `<button class="open-store-btn" data-id="${goal.id}" style="width: 100%; margin-top: 15px; background: #16a34a; cursor: pointer;">${icons.unlock} Goal Complete! Open Rewards</button>`;
      }
    } else {
      goalActionBtn = `<button disabled style="width: 100%; margin-top: 15px; background: #9ca3af; cursor: not-allowed;">${icons.lock} Reward Locked</button>`;
    }

    goalElement.innerHTML = `
      <div style="padding-right: 35px;">
        <h3 class="goal-name-text">${goal.name} (R ${goal.target.toLocaleString()})</h3>
      </div>
      <button class="delete-goal-btn" data-id="${goal.id}">&times;</button>
      
      <p style="font-size: 13px; color: #64748b; margin-top: 5px; margin-bottom: 0;">${goal.duration > 0 ? `Term: ${goal.duration} Months` : 'Term: Open'}</p>
      ${monthlyMin > 0 ? `<p style="font-size: 13px; font-weight: 600; color: #15803d; margin-top: 4px; margin-bottom: 0;">Min. Deposit: R ${monthlyMin.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>` : ''}
      
      <div class="progress-container">
        <div class="progress-bar" style="width: ${goalPercentage}%;"></div>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div class="progress-text goal-saved-text">Saved: R ${goal.saved.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
        <div class="progress-text">${Math.round(goalPercentage)}% Reached</div>
      </div>
      
      <!-- Direct Goal Deposit & Withdraw Area -->
      <div class="goal-funding">
        <input type="number" id="fund-input-${goal.id}" placeholder="Amount..." style="flex: 1;" />
        <button class="fund-goal-btn" data-id="${goal.id}" style="width: auto;">Deposit</button>
        <button class="withdraw-goal-btn secondary" data-id="${goal.id}" style="width: auto;">Withdraw</button>
      </div>

      ${goalActionBtn}
    `;

    goalsContainer.appendChild(goalElement);
  });

  // Goal Deposit Logic (Anti-Exploit + Dynamic Multipliers)
  document.querySelectorAll('.fund-goal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.getAttribute('data-id'));
      const input = document.getElementById(`fund-input-${id}`);
      const amount = parseFloat(input.value);

      if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid deposit amount.");
        return;
      }

      if (amount > currentBalance) {
        alert(`Insufficient funds! You only have R ${currentBalance.toLocaleString(undefined, {minimumFractionDigits: 2})} available in your main balance. Add funds via the Transaction Log first.`);
        return;
      }

      const goal = goals.find(g => g.id === id);
      if (goal) {
        const wasReached = goal.saved >= goal.target;
        
        goal.saved += amount;
        currentBalance -= amount;
        
        const isReachedNow = goal.saved >= goal.target;
        const monthlyMin = goal.duration > 0 ? (goal.target / goal.duration) : 0;
        
        let pointsEarned = 0;
        
        // Anti-Exploit Check: If rewards were already claimed, re-deposits yield 0 points
        if (goal.rewardClaimed) {
          pointsEarned = 0;
        } else if (goal.previouslyReached) {
          // If the goal was previously reached but they haven't claimed rewards yet
          if (wasReached) {
            pointsEarned = 25; // Over-saving
          } else {
            pointsEarned = 50; // Refilling a deficit, exactly matching the 50 points withdrawn
          }
        } else {
          // Initial grind to 100%
          if (monthlyMin > 0 && amount >= monthlyMin) {
            const multiples = Math.floor((amount + 0.1) / monthlyMin);
            pointsEarned = multiples * 100;
          } else {
            pointsEarned = 50; 
          }

          if (isReachedNow) {
            pointsEarned += 50; // Goal completion bonus
            goal.previouslyReached = true; // Lock in the milestone
          }
        }

        points += pointsEarned;
        balanceDisplay.textContent = 'R ' + currentBalance.toLocaleString(undefined, {minimumFractionDigits: 2});
        
        const logNote = goal.rewardClaimed ? ` (Reward previously claimed - 0 pts)` : ` (+${pointsEarned} pts)`;
        logTransaction(amount, false, `Portfolio Deposit: ${goal.name}${logNote}`, '#0284c7');
        updateHeaderPoints();
        input.value = '';
        renderGoals(); 
      }
    });
  });

  // Goal Withdrawal Logic
  document.querySelectorAll('.withdraw-goal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.getAttribute('data-id'));
      const input = document.getElementById(`fund-input-${id}`);
      const amount = parseFloat(input.value);

      if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid withdrawal amount.");
        return;
      }

      const goal = goals.find(g => g.id === id);
      if (goal) {
        if (amount > goal.saved) {
          alert(`You only have R ${goal.saved.toLocaleString(undefined, {minimumFractionDigits: 2})} saved in this portfolio.`);
          return;
        }
        
        goal.saved -= amount;
        currentBalance += amount;
        
        points -= 50;
        if (points < 0) points = 0;
        
        balanceDisplay.textContent = 'R ' + currentBalance.toLocaleString(undefined, {minimumFractionDigits: 2});
        logTransaction(amount, true, `Portfolio Withdrawal: ${goal.name}`, '#0284c7');
        updateHeaderPoints();
        input.value = '';
        renderGoals(); 
      }
    });
  });

  // Goal Deletion with Refund Logic
  document.querySelectorAll('.delete-goal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.getAttribute('data-id'));
      const goalToCancel = goals.find(g => g.id === id);
      
      if (goalToCancel && goalToCancel.saved > 0) {
        currentBalance += goalToCancel.saved;
        balanceDisplay.textContent = 'R ' + currentBalance.toLocaleString(undefined, {minimumFractionDigits: 2});
        logTransaction(goalToCancel.saved, true, `Refund from deleted portfolio: ${goalToCancel.name}`, '#0284c7');
        alert(`R ${goalToCancel.saved.toLocaleString()} was safely returned to your available balance.`);
      }
      
      goals = goals.filter(g => g.id !== id);
      renderGoals();
    });
  });

  // Open Rewards Store
  document.querySelectorAll('.open-store-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      rewardsModal.classList.add('active');
    });
  });
}

// Initial Render
renderGoals();


// --- Rewards Store Logic ---

navOpenRewardsBtn.addEventListener('click', () => {
  rewardsModal.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
  rewardsModal.classList.remove('active');
});

claimStoreBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const cost = parseInt(e.target.getAttribute('data-cost'));
    const value = parseInt(e.target.getAttribute('data-value'));
    const name = e.target.getAttribute('data-name');

    if (points >= cost) {
      points -= cost;
      
      // Mark reached goals as rewardClaimed to prevent exploits
      goals.forEach(g => {
        if (g.saved >= g.target) g.rewardClaimed = true;
      });

      updateHeaderPoints();
      rewardsModal.classList.remove('active');
      logTransaction(0, true, `Redeemed: ${name}`, `#1d4ed8`);
      alert(`Success! Check your email for your R${value} ${name}. Remaining points: ${points}`);
      renderGoals(); // Re-renders to grey out buttons if points hit 0
    } else {
      alert(`Insufficient Points. You need ${cost} points, but only have ${points}.`);
    }
  });
});

claimCashBtn.addEventListener('click', () => {
  const rewardCash = points * 0.25;
  if (rewardCash > 0) {
    currentBalance += rewardCash;
    balanceDisplay.textContent = 'R ' + currentBalance.toLocaleString(undefined, {minimumFractionDigits: 2});
    balanceDisplay.className = currentBalance >= 0 ? 'balance positive' : 'balance negative';
    
    // Mark reached goals as rewardClaimed
    goals.forEach(g => {
      if (g.saved >= g.target) g.rewardClaimed = true;
    });

    logTransaction(rewardCash, true, 'Cash Reward Payout');
    
    points = 0;
    updateHeaderPoints();
    rewardsModal.classList.remove('active');
    alert(`Success! R ${rewardCash.toLocaleString(undefined, {minimumFractionDigits: 2})} has been deposited into your balance.`);
    renderGoals(); // Re-renders to grey out buttons since points are 0
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
}

// --- Core Transaction & Logging Logic ---

function logTransaction(amount, isDeposit, categoryName, customColor = null) {
  if (transactionCount === 0 && emptyState) emptyState.remove(); 
  transactionCount++;

  const li = document.createElement('li');
  li.className = 'transaction-item';

  const amountColor = customColor ? customColor : (isDeposit ? '#15803d' : '#b91c1c');
  const amountPrefix = amount === 0 ? '' : (isDeposit ? '+ R ' : '- R ');

  li.innerHTML = `
    <div>
      <strong class="transaction-title-text">${categoryName}</strong>
      <div class="transaction-date-text">Just now</div>
    </div>
    <div style="font-weight: 600; color: ${amountColor};">
      ${amountPrefix}${amount.toLocaleString(undefined, {minimumFractionDigits: 2})}
    </div>
  `;
  transactionList.prepend(li);
}

// 50 Points for standard main balance deposits
addBtn.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  const isDeposit = typeSelect.value === 'Deposit';
  const categoryName = categorySelect.value;
  
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  if (!isDeposit && amount > currentBalance) {
    alert(`Insufficient funds! You only have R ${currentBalance.toLocaleString(undefined, {minimumFractionDigits: 2})} available.`);
    return;
  }

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
  amountInput.value = '';
  
  // Re-render goals to update "0 points" button states dynamically
  renderGoals();
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

  goals.push({ id: Date.now(), name: name, target: target, duration: duration, saved: 0, rewardClaimed: false, previouslyReached: false });
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
  li.className = 'gig-item';

  li.innerHTML = `
    <div>
      <strong class="gig-title-text">Pending: ${gigName}</strong>
      <div class="gig-amount-text">R ${gigAmount.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
    </div>
    <button class="mark-paid-btn" style="background: #15803d; font-size: 12px; padding: 8px 12px;">${icons.check} Cleared</button>
  `;

  li.querySelector('.mark-paid-btn').addEventListener('click', () => {
    currentBalance += gigAmount;
    balanceDisplay.textContent = 'R ' + currentBalance.toLocaleString(undefined, {minimumFractionDigits: 2});
    balanceDisplay.className = currentBalance >= 0 ? 'balance positive' : 'balance negative';
    
    logTransaction(gigAmount, true, `Invoice Cleared: ${gigName}`);
    points += 100; 
    updateHeaderPoints();

    li.remove();
    gigCount--;
    if (gigCount === 0) gigList.appendChild(gigEmptyState);
    
    // Unlock any goals if points were previously at 0
    renderGoals();
  });

  gigList.prepend(li);
  gigNameInput.value = '';
  gigAmountInput.value = '';
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

// Theme Switcher
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

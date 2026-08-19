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
  gift: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>`,
  accessibility: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"></circle><path d="m5 8 7-2 7 2"></path><path d="M12 14v7"></path><path d="M8 22l4-8 4 8"></path></svg>`,
  speech: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`,
  text: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>`,
  eye: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`
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
  <div id="rewards-modal" class="modal-overlay" aria-hidden="true" role="dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Corporate Partner Rewards</h2>
        <button id="close-modal-btn" class="secondary" aria-label="Close Modal" style="padding: 8px 16px; font-size: 14px;">Close</button>
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
          <input type="checkbox" id="theme-toggle" aria-label="Toggle Dark Mode">
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
        <div class="points" id="user-points" aria-live="polite">0 pts</div>
        <div id="reward-value">Reward Value: R 0.00</div>
      </div>
      <button id="nav-open-rewards-btn" style="background: #10b981; color: white; margin-top: 10px;">${icons.gift} Open Rewards Store</button>
    </div>

    <!-- Statistics -->
    <div class="stats-grid">
      <div class="stat">
        <h3>Available Balance</h3>
        <p class="balance positive" id="total-balance" aria-live="polite">R 0</p>
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
          <input type="number" id="transaction-amount" placeholder="0.00" aria-label="Transaction Amount" />
        </div>
        
        <div class="form-group">
          <label>Transaction Type</label>
          <select id="transaction-type" aria-label="Transaction Type">
            <option value="Deposit">Deposit (+)</option>
            <option value="Expense">Withdrawal (-)</option>
          </select>
        </div>

        <div class="form-group">
          <label>Category</label>
          <select id="transaction-category" aria-label="Transaction Category">
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
              <input type="text" id="gig-name-input" placeholder="e.g. IT Repair" aria-label="Invoice Name" />
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label>Expected ZAR</label>
              <input type="number" id="gig-amount-input" placeholder="0.00" aria-label="Expected Amount" />
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
            <input type="text" id="goal-name-input" placeholder="e.g. Vehicle Fund" aria-label="Portfolio Name" />
          </div>
          <div class="dashboard-grid" style="gap: 15px; margin-bottom: 0;">
            <div class="form-group" style="margin-bottom: 0;">
              <label>Target (ZAR)</label>
              <input type="number" id="goal-target-input" placeholder="10000" aria-label="Target Amount" />
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label>Duration (Months)</label>
              <input type="number" id="goal-duration-input" placeholder="12" aria-label="Duration in months" />
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
          <select id="sim-account-type" aria-label="Simulator Account Type">
            <option value="6.00">Access (Up to 6.00%)</option>
            <option value="7.25">Notice Deposit (Up to 7.25%)</option>
            <option value="7.00">Tax-free (Up to 7.00%)</option>
            <option value="8.25" selected>Fixed-term (Up to 8.25%)</option>
          </select>
        </div>
        <div class="form-group" style="margin-bottom: 0;">
          <label>Duration (Years)</label>
          <input type="number" id="sim-years" placeholder="e.g. 2" aria-label="Simulator Years" />
        </div>
      </div>

      <div class="dashboard-grid" style="gap: 15px; margin-bottom: 15px;">
        <div class="form-group" style="margin-bottom: 0;">
          <label>Initial Deposit (ZAR)</label>
          <input type="number" id="sim-initial" placeholder="e.g. 5000" aria-label="Simulator Initial Deposit" />
        </div>
        <div class="form-group" style="margin-bottom: 0;">
          <label>Monthly Addition (Optional)</label>
          <input type="number" id="sim-monthly" placeholder="e.g. 500" aria-label="Simulator Monthly Addition" />
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
      <ul id="transaction-list" style="list-style: none; padding: 0; margin: 0;" aria-live="polite">
        <li id="empty-state" style="padding: 15px 0; color: #94a3b8; font-style: italic; text-align: center; font-size: 14px;">
          No recent activity.
        </li>
      </ul>
    </div>

  </div>

  <!-- Floating Accessibility Toolkit -->
  <button id="a11y-fab" class="a11y-fab" aria-label="Open Accessibility Options">
    ${icons.accessibility}
  </button>
  <div id="a11y-menu" class="a11y-menu" aria-label="Accessibility Menu" role="dialog">
    <h3>Accessibility Tools</h3>
    <button id="a11y-text-btn" class="a11y-btn">${icons.text} Text Magnifier</button>
    <button id="a11y-dyslexia-btn" class="a11y-btn">${icons.eye} Dyslexia Font</button>
    <button id="a11y-speech-btn" class="a11y-btn">${icons.speech} Read Dashboard Aloud</button>
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

let goals = []; // No default portfolio anymore

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

// --- Accessibility Toolkit Logic ---
const a11yFab = document.getElementById('a11y-fab');
const a11yMenu = document.getElementById('a11y-menu');
const a11yTextBtn = document.getElementById('a11y-text-btn');
const a11yDyslexiaBtn = document.getElementById('a11y-dyslexia-btn');
const a11ySpeechBtn = document.getElementById('a11y-speech-btn');

a11yFab.addEventListener('click', () => {
  a11yMenu.classList.toggle('active');
});

// Text Magnifier Cycle
let textSizeState = 0; // 0: Normal, 1: Large, 2: X-Large
a11yTextBtn.addEventListener('click', () => {
  textSizeState = (textSizeState + 1) % 3;
  document.body.classList.remove('text-large', 'text-xlarge');
  
  if (textSizeState === 1) {
    document.body.classList.add('text-large');
    a11yTextBtn.innerHTML = `${icons.text} Text: Large`;
  } else if (textSizeState === 2) {
    document.body.classList.add('text-xlarge');
    a11yTextBtn.innerHTML = `${icons.text} Text: Extra Large`;
  } else {
    a11yTextBtn.innerHTML = `${icons.text} Text Magnifier`;
  }
});

// Dyslexia Font Toggle
a11yDyslexiaBtn.addEventListener('click', () => {
  document.body.classList.toggle('dyslexia-mode');
});

// Text-to-Speech Native API Integration
a11ySpeechBtn.addEventListener('click', () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Stop any current speech
    
    // Construct the verbal string to read to the user
    let speechText = `Smart Money Dashboard Summary. Your available balance is ${currentBalance} Rand. You have ${points} reward points. You currently have ${goals.length} active saving portfolios.`;
    
    if (goals.length > 0) {
      speechText += " Your portfolios are: ";
      goals.forEach(g => {
        speechText += `${g.name}, with a target of ${g.target} Rand. You have saved ${g.saved} Rand so far. `;
      });
    }

    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.rate = 0.9; // Slightly slower for better comprehension
    window.speechSynthesis.speak(utterance);
    
    a11yMenu.classList.remove('active'); // Close menu after activating
  } else {
    alert("Text-to-Speech is not fully supported in this browser.");
  }
});

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
    
    let goalActionBtn = '';
    if (isReached) {
      if (points === 0) {
        goalActionBtn = `<button disabled aria-label="Reward Claimed" style="width: 100%; margin-top: 15px; background: #9ca3af; cursor: not-allowed;">${icons.check} Reward Claimed (0 pts)</button>`;
      } else {
        goalActionBtn = `<button class="open-store-btn" data-id="${goal.id}" aria-label="Open Rewards Store" style="width: 100%; margin-top: 15px; background: #16a34a; cursor: pointer;">${icons.unlock} Goal Complete! Open Rewards</button>`;
      }
    } else {
      goalActionBtn = `<button disabled aria-label="Reward Locked" style="width: 100%; margin-top: 15px; background: #9ca3af; cursor: not-allowed;">${icons.lock} Reward Locked</button>`;
    }

    goalElement.innerHTML = `
      <div style="padding-right: 35px;">
        <h3 class="goal-name-text">${goal.name} (R ${goal.target.toLocaleString()})</h3>
      </div>
      <button class="delete-goal-btn" data-id="${goal.id}" aria-label="Delete Portfolio">&times;</button>
      
      <p style="font-size: 13px; color: #64748b; margin-top: 5px; margin-bottom: 0;">${goal.duration > 0 ? `Term: ${goal.duration} Months` : 'Term: Open'}</p>
      ${monthlyMin > 0 ? `<p style="font-size: 13px; font-weight: 600; color: #15803d; margin-top: 4px; margin-bottom: 0;">Min. Deposit: R ${monthlyMin.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>` : ''}
      
      <div class="progress-container" aria-hidden="true">
        <div class="progress-bar" style="width: ${goalPercentage}%;"></div>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div class="progress-text goal-saved-text">Saved: R ${goal.saved.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
        <div class="progress-text">${Math.round(goalPercentage)}% Reached</div>
      </div>
      
      <div class="goal-funding">
        <input type="number" id="fund-input-${goal.id}" placeholder="Amount..." aria-label="Amount to Deposit or Withdraw" style="flex: 1;" />
        <button class="fund-goal-btn" data-id="${goal.id}" aria-label="Deposit into Portfolio" style="width: auto;">Deposit</button>
        <button class="withdraw-goal-btn secondary" data-id="${goal.id}" aria-label="Withdraw from Portfolio" style="width: auto;">Withdraw</button>
      </div>

      ${goalActionBtn}
    `;

    goalsContainer.appendChild(goalElement);
  });

  // Deposit Logic
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
        
        if (goal.rewardClaimed) {
          pointsEarned = 0;
        } else if (goal.previouslyReached) {
          if (wasReached) {
            pointsEarned = 25; 
          } else {
            pointsEarned = 50; 
          }
        } else {
          if (monthlyMin > 0 && amount >= monthlyMin) {
            const multiples = Math.floor((amount + 0.1) / monthlyMin);
            pointsEarned = multiples * 100;
          } else {
            pointsEarned = 50; 
          }

          if (isReachedNow) {
            pointsEarned += 50; 
            goal.previouslyReached = true; 
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

  // Withdraw Logic
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

  // Delete Logic
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

  // Store Modal
  document.querySelectorAll('.open-store-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      rewardsModal.classList.add('active');
    });
  });
}

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
      
      goals.forEach(g => {
        if (g.saved >= g.target) g.rewardClaimed = true;
      });

      updateHeaderPoints();
      rewardsModal.classList.remove('active');
      logTransaction(0, true, `Redeemed: ${name}`, `#1d4ed8`);
      alert(`Success! Check your email for your R${value} ${name}. Remaining points: ${points}`);
      renderGoals(); 
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
    
    goals.forEach(g => {
      if (g.saved >= g.target) g.rewardClaimed = true;
    });

    logTransaction(rewardCash, true, 'Cash Reward Payout');
    
    points = 0;
    updateHeaderPoints();
    rewardsModal.classList.remove('active');
    alert(`Success! R ${rewardCash.toLocaleString(undefined, {minimumFractionDigits: 2})} has been deposited into your balance.`);
    renderGoals(); 
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

// Main Balance Deposits
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
  
  renderGoals();
});

// Create Portfolio
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
    <button class="mark-paid-btn" aria-label="Mark Invoice as Paid" style="background: #15803d; font-size: 12px; padding: 8px 12px;">${icons.check} Cleared</button>
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

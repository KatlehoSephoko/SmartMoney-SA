import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    
    <!-- Navigation -->
    <div class="navbar">
      <div>
        <h1>SmartMoney-SA</h1>
        <p>Your Personal Finance Dashboard</p>
      </div>
      <div class="points">1,250 pts</div>
    </div>

    <!-- Statistics -->
    <div class="stats-grid">
      <div class="stat">
        <h3>Total Balance</h3>
        <!-- Added an ID here so JS can update the text -->
        <p class="balance positive" id="total-balance">R 15,400</p>
      </div>
      <div class="stat">
        <h3>Monthly Savings</h3>
        <p>R 3,200</p>
      </div>
      <div class="stat">
        <h3>Active Goals</h3>
        <p>2</p>
      </div>
    </div>

    <!-- Main Dashboard -->
    <div class="dashboard-grid">
      
      <!-- Left Column: Form -->
      <div class="card">
        <h2>Quick Add</h2>
        <div class="form-group">
          <label>Amount (ZAR)</label>
          <!-- Added an ID here to read what the user types -->
          <input type="number" id="transaction-amount" placeholder="Enter amount..." />
        </div>
        <div class="form-group">
          <label>Category</label>
          <!-- Added an ID and values to read the dropdown choice -->
          <select id="transaction-type">
            <option value="Deposit">Deposit</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
        <!-- Added an ID to listen for the click -->
        <button id="add-transaction-btn">Add Transaction</button>
      </div>

      <!-- Right Column: Goals -->
      <div class="card">
        <h2>Savings Goals</h2>
        <div class="goal">
          <div class="goal-header">
            <h3>Emergency Fund</h3>
          </div>
          <div class="progress-container">
            <div class="progress-bar" style="width: 70%;"></div>
          </div>
          <div class="progress-text">70% Reached</div>
        </div>
      </div>

    </div>
  </div>
`

/* ==========================================
   JAVASCRIPT LOGIC (The "Brain")
   ========================================== */

// 1. Set the starting balance
let currentBalance = 15400;

// 2. Grab the specific HTML elements we added IDs to above
const balanceDisplay = document.getElementById('total-balance');
const amountInput = document.getElementById('transaction-amount');
const typeSelect = document.getElementById('transaction-type');
const addBtn = document.getElementById('add-transaction-btn');

// 3. Listen for a click on the 'Add Transaction' button
addBtn.addEventListener('click', () => {
  
  // Convert the text inside the input box into a math number
  const amount = parseFloat(amountInput.value);

  // Stop the code if they typed nothing or a negative number
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount!");
    return;
  }

  // Add or subtract based on whether they chose Deposit or Expense
  if (typeSelect.value === 'Deposit') {
    currentBalance += amount;
  } else {
    currentBalance -= amount;
  }

  // Update the big balance number on the screen with commas
  balanceDisplay.textContent = 'R ' + currentBalance.toLocaleString();

  // Change the text color to red if the balance drops below zero
  if (currentBalance >= 0) {
    balanceDisplay.className = 'balance positive';
  } else {
    balanceDisplay.className = 'balance negative';
  }

  // Clear the input box so it's empty for their next transaction
  amountInput.value = '';
});

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
        <p class="balance positive">R 15,400</p>
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
          <input type="number" placeholder="Enter amount..." />
        </div>
        <div class="form-group">
          <label>Category</label>
          <select>
            <option>Deposit</option>
            <option>Expense</option>
          </select>
        </div>
        <button>Add Transaction</button>
      </div>

      <!-- Right Column: Goals -->
      <div class="card">
        <h2>Savings Goals</h2>
        <div class="goal">
          <div class="goal-header">
            <h3>Emergency Fund</h3>
          </div>
          <div class="progress-container">
            <!-- Inline style used here just to show the green bar working -->
            <div class="progress-bar" style="width: 70%;"></div>
          </div>
          <div class="progress-text">70% Reached</div>
        </div>
      </div>

    </div>
  </div>
`


const express = require("express");
const cors = require("cors");

const budgetRoutes = require("./routes/budget");
const goalRoutes = require("./routes/goals");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/budget", budgetRoutes);
app.use("/api/goals", goalRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
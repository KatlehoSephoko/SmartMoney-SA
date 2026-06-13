const express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/", async (req, res) => {
  const { user_id, income, expenses } = req.body;

  const result = await pool.query(
    "INSERT INTO budgets(user_id,income,expenses) VALUES($1,$2,$3) RETURNING *",
    [user_id, income, expenses]
  );

  res.json(result.rows[0]);
});

router.get("/:userId", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM budgets WHERE user_id=$1",
    [req.params.userId]
  );

  res.json(result.rows);
});

module.exports = router;
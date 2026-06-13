const express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/", async (req, res) => {
  const { user_id, goal_name, target_amount } = req.body;

  const result = await pool.query(
    `INSERT INTO savings_goals
    (user_id,goal_name,target_amount)
    VALUES($1,$2,$3)
    RETURNING *`,
    [user_id, goal_name, target_amount]
  );

  res.json(result.rows[0]);
});

router.get("/:userId", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM savings_goals WHERE user_id=$1",
    [req.params.userId]
  );

  res.json(result.rows);
});

module.exports = router;
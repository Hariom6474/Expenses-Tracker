const express = require("express");
const controller = require("../controller/control");

const router = express.Router();

router.post("/add-expense", controller.postAddExpense);
router.get("/get-expense", controller.getAddExpense);
router.delete("/delete-expense/:id", controller.postDeleteExpense);

module.exports = router;

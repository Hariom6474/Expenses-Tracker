const Expense = require("../models/expense");

exports.postAddExpense = async (req, res, next) => {
  try {
    const amount = req.body.Expenseamount;
    const description = req.body.description;
    const category = req.body.category;
    const data = await Expense.create({
      Expenseamount: amount,
      description: description,
      category: category,
    });
    res.status(201).json(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

exports.getAddExpense = async (req, res, next) => {
  try {
    const data = await Expense.findAll();
    res.status(201).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.postDeleteExpense = async (req, res, next) => {
  try {
    const ExpenseId = req.params.id;
    await Expense.destroy({ where: { id: ExpenseId } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
};

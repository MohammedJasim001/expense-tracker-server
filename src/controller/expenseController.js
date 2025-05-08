import Expense from "../model/expense.js";

export const addExpense = async (req, res) => {
  try {
    const { category, amount, description } = req.body;

    const expense = await Expense.create({
      category,
      amount,
      description,
    });

    res.status(201).json({ message: "Expense Created", expense });
  } catch (error) {
    res.status(500).json({message:'Error from backend'})
  }
};

export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find()
    res.status(200).json(expenses) 
  } catch (error) {}
};

export const category = async (req,res) => {

    try {
    const expense = await Expense.aggregate([
      {
        $group: {
          _id: "$category",        
          totalAmount: { $sum: "$amount" } 
        }
      }
    ]);
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
}

export const totalAmountSpent = async(req,res) => {
    try {
        const amount = await Expense.find()
        const totalAmount = amount.reduce((acc,ele)=> {
            return acc+ele.amount
        },0)
        res.status(200).json(totalAmount)
        console.log(totalAmount);
    } catch (error) {
        res.status(500).json({message:"Server error"})
    }
}

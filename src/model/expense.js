import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    category:{
        type:String
    },
    amount:{
        type:Number
    },
    description:{
        type:String
    }
})

const Expense = mongoose.model('Expense',expenseSchema)

export default Expense
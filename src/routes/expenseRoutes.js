import express from 'express'
import { addExpense, category, getExpenses, totalAmountSpent } from '../controller/expenseController.js'

const router = express.Router()

router.post('/add',addExpense)
router.get('/getexpenses',getExpenses)
router.get('/category',category)
router.get('/totalamount',totalAmountSpent)

export default router
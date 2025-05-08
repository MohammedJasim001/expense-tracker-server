import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes/expenseRoutes.js'

mongoose.connect('mongodb://localhost:27017/expense-tracker')
    .then(()=>console.log('mongodb connect'))
    .catch((err)=>console.log(err))

const app = express()


app.use(express.json())
app.use(cors())

app.use('/',router)

app.listen(3000,()=>{
    console.log('server running on port 3000')
})
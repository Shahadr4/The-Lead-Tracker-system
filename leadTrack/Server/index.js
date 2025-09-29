import express from 'express'
import cors from 'cors'

import authRouter from './routes/auth.js'
import connectToDb from './db/db.js'
connectToDb()




const startServer = async ()=>{
 
    
    
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth',authRouter)


app.listen(process.env.PORT,()=>{
    console.log("server is running on port", process.env.PORT)
})
}
startServer()
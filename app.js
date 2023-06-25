import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import dataRoutes from './routes/dataRoutes.js'

dotenv.config()
const app=express()

const port=process.env.PORT || 8000

app.use(cors())

//JSON
app.use(express.json())
app.listen(port,()=>{
    console.log(`server live on port: ${port}`)
})

app.use("/api",dataRoutes)

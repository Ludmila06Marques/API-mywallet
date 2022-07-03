import express from "express"
import cors from "cors"
import joi from 'joi'
import appRouter from './routes/appRoutes.js'
import authRouter from './routes/authRoutes.js'
import validateuser from "./middlewares/validateUser.js";



const app=express()
app.use(express.json())
app.use(cors())


app.use(authRouter)
app.use(validateuser,appRouter)


const PORT= process.env.PORT||5000

		app.listen(PORT ,()=>{
		    console.log("ta funfando")
		})
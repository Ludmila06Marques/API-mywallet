import express from "express"
import cors from "cors"
import joi from 'joi'
import bcrypt from 'bcrypt';
import {v4 as uuid} from "uuid"
import appRouter from './routes/appRoutes.js'
import authRouter from './routes/authRoutes.js'
import validateuser from "./middlewares/validateUser.js";



const app=express()
app.use(express.json())
app.use(cors())


app.use(authRouter)
app.use(validateuser,appRouter)




		app.listen(process.env.PORT ,()=>{
		    console.log("ta funfando")
		})
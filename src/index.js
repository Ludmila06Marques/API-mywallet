import express from "express"
import cors from "cors"
import appRouter from './routes/appRoutes.js'
import authRouter from './routes/authRoutes.js'




const app=express()
app.use(express.json())
app.use(cors())


app.use(authRouter)
app.use(appRouter)


const PORT= process.env.PORT||5008

		app.listen(PORT ,()=>{
		    console.log("ta funfando")
		})
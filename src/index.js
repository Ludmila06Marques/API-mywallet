import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import {MongoClient} from "mongodb"
import joi from 'joi'
import bcrypt from 'bcrypt';
import {v4 as uuid} from "uuid"

dotenv.config()
let db= null
const index=express()
index.use(express.json())
index.use(cors())

const cliente= new MongoClient(process.env.URL_MONGO)
cliente.connect().then(()=>{
db=cliente.db(process.env.MY_WALLET_API)
})




		index.listen(5000 ,()=>{
		    console.log("ta funfando")
		})
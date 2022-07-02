import {MongoClient} from "mongodb"
import dotenv from "dotenv"

dotenv.config()
let db= null


const cliente= new MongoClient(process.env.URL_MONGO)
cliente.connect().then(()=>{
db=cliente.db(process.env.MY_WALLET_API)
})

export  {db}
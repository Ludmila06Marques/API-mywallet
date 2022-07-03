
import {db} from "../dbStrategy/mongo.js"
import {transationSchema} from "../Schemas/appSchema.js";
import dayjs from "dayjs";


export async function get_transation(req,res){
    const {user} = res.locals;
    
    try {
        const transations= await db.collection("transations").find({userId: user._id}).toArray()
        res.send(transations)

        
    } catch (error) {
        
        return res.sendStatus(500);
        
    }
}
//valor , descricao  , hora , tipo
export async function post_transation(req,res){
    const {user} = res.locals;  
    const { error } = transationSchema.validate(req.body) 
    if (error) {
        console.log(error)
        return res.sendStatus(422)    
    } 
    try {
        const {value ,type , description}=req.body
        const newTransation =  await db.collection("transations").insertOne({
            type,
            value,
            description, 
            date: dayjs().format('DD/MM'),
            userId: user._id
          });
        res.status(201).send(newTransation)
        
    } catch (error) {
        console.log("Error adding new transaction.");
    console.log(error);
    return res.sendStatus(500);
    }


}

export async function get_saldo(req,res){
    const {user} = res.locals;
    console.log(user)
    
    try {
            let contadorIn=0
            let contadorOut=0
        const transations= await db.collection("transations").find({userId: user._id}).toArray()

        let entrada= transations.filter(item => item.type=="in")
              
        for(let i=0 ; i<entrada.length ; i++){
            let item = entrada[i]
            contadorIn =contadorIn + item.value 
        
        }
        // calculo das saidas
        let saida= transations.filter(item => item.type=="out")
      
        for(let i=0 ; i<saida.length ; i++){
            let item = saida[i]
            contadorOut =contadorOut + item.value 
        
        }
        const newSaldo=contadorIn-contadorOut
        console.log(newSaldo)
        res.send({...user , saldo:newSaldo})
       


     

        
    } catch (error) {
        
        return res.sendStatus(500);
        
    }
}


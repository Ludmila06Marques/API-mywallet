
import {db} from "../dbStrategy/mongo.js"
import joi from "joi"


export async function transations(req,res){
    const {user} = res.locals;
  

    try {
        const transations= await db.collection("transations").find({userId: user._id}).toArray()
        res.send(transations)

        
    } catch (error) {
        res.sendStatus(401)
        
    }
}
//valor , descricao  , hora , tipo
export async function post_transation(req,res){
    const {value ,type , description}=req.body
    const {user} = res.locals;

    const transationSchema=joi.object({
        value:joi.number().greater(0).required(),
        description:joi.string().required(),
        type:joi.string().valid('in' , 'out'),
        date: joi.required()
    })
    const { error } = transationSchema.validate(transation) 
    if (error) {
        console.log(error)
        return res.sendStatus(422)    
    } 

    const newTransation =  await db.collection("transations").insertOne({
        type,
        value,
        description, 
        date: dayjs().format('DD/MM'),
        userId: user._id
      });
    res.status(201).sed(newTransation)
}


import {db} from "../dbStrategy/mongo.js"
async function validateuser(req,res,next){

    const {authorization}= req.headers
    const token= authorization?.replace('Bearer ', '');
    const session = await  db.collection('users').findOne({token})

    if(!session){
        return res.sendStatus(401)
    }
   // res.locals.session= session  mandar alguma variavel daq pra outro lugar 
   // recebe assim: session= res.locals.session 

next()

}
export default validateuser
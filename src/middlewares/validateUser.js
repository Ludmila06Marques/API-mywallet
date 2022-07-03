import {db} from "../dbStrategy/mongo.js"



async function validateuser(req,res,next){

    const {authorization}= req.headers
    const token= authorization?.replace('Bearer ', '');
    const session = await  db.collection('sessoes').findOne({token})

    if(!session){
        return res.sendStatus(401)
    }
    const user = await db.collection("users").findOne({_id: session.userId});
    if(!user) return res.status(401).send("No user found."); // unauthorized
    res.locals.user = user;
    
   // res.locals.session= session  mandar alguma variavel daq pra outro lugar 
   // recebe assim: session= res.locals.session 
 
next()

}
export default validateuser
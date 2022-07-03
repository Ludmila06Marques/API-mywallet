import joi from 'joi'

export const userSchema=joi.object({
    email:joi.string().email().required(),
   name:joi.string().required(),
    password:joi.string().required(),
    confirm:joi.string().required(),
    saldo:joi.number()


})

 export const loginSchema=joi.object({
    email:joi.string().email().required(),
    password:joi.string().required()

})
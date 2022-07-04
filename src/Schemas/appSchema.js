
import joi from "joi";

 export const transationSchema=joi.object({
    value:joi.number().greater(0).required(),
    description:joi.string().max(20).required(),
    type:joi.string().valid('in' , 'out')
  
})
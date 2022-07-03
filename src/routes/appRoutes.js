import { Router } from "express"
import { transations } from "../controllers/appController.js";
import validateuser from "../middlewares/validateUser.js";
import { post_transation } from "../controllers/appController.js";

const router =Router()


router.get('/transations', validateuser,  transations)
router.post('/transations', validateuser,  post_transation)


export default router;
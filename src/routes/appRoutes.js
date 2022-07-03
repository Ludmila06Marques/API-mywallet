import { Router } from "express"
import { get_saldo, get_transation } from "../controllers/appController.js";
import validateUser from "../middlewares/validateUser.js";
import { post_transation } from "../controllers/appController.js";

const router =Router()

router.use(validateUser)
router.get('/transations' , get_transation)
router.post('/transations', post_transation)
router.get('/saldo', get_saldo)


export default router;
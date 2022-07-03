import { Router } from "express"
import { createUser } from "../controllers/authController.js";
import { loginuser } from "../controllers/authController.js";


const router =Router()

router.post('/sing-up',createUser)
router.post('/sing-in',loginuser)

export default router;
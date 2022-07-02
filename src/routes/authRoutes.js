import { Router } from "express"
import { createUser } from "../controllers/authController.js";

const router =Router()

router.get('/create',createUser)

export default router;
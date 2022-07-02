import { Router } from "express"
import { post } from "../controllers/appController.js";

const router =Router()


router.get('/sing-in',post)


export default router;
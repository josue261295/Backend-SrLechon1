
import { Router } from 'express';
import { UserController } from '../controllers/User.controller.js';
const router = Router();

router.post("/create-user", UserController.createUser);



export default router;
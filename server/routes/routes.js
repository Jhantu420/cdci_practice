import express from 'express';

import { getUser, userRegister } from '../controllers/userController.js';

const router = express.Router();

router.post('/register',userRegister)
router.get('/getUser',getUser)

export default router;
import express from 'express';
import protectRoute from '../middleware/protectRoute.js'
import {getMessages} from '../controllers/message.controller.js'
import {sendMessage} from '../controllers/message.controller.js'

const router = express.Router();

//protectRoute prevents non logged in user from accessing tis endpoint

router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessages);





export default router;
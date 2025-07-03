import { Router } from 'express';
import AuthController from '../controllers/AuthController.ts'
import ChatGroupController from '../controllers/ChatGroupController.ts'
import authMiddleware from '../middleware/AuthMiddleware.ts'
const router = Router();
router.post("/auth/login", AuthController.login);


router.get("/chat-group",authMiddleware, ChatGroupController.index);
router.get("/chat-group/:id",authMiddleware, ChatGroupController.show);
router.post("/chat-group",authMiddleware, ChatGroupController.store);
router.put("/chat-group/:id",authMiddleware, ChatGroupController.update);
router.delete("/chat-group/:id",authMiddleware, ChatGroupController.destroy);

export default router;
import { Router } from 'express';
import AuthController from '../controllers/AuthController.ts'
import ChatGroupController from '../controllers/ChatGroupController.ts'
import authMiddleware from '../middleware/AuthMiddleware.ts'
import ChatGroupUserController from "../controllers/ChatGroupUserController.ts";
import ChatsController from '../controllers/ChatsController.ts';
const router = Router();

router.post("/auth/login", AuthController.login);


router.get("/chat-group",authMiddleware, ChatGroupController.index);
router.get("/chat-group/:id", ChatGroupController.show);
router.post("/chat-group",authMiddleware, ChatGroupController.store);
router.put("/chat-group/:id",authMiddleware, ChatGroupController.update);
router.delete("/chat-group/:id",authMiddleware, ChatGroupController.destroy);

router.get("/chat-group-user", ChatGroupUserController.index);
router.post("/chat-group-user", ChatGroupUserController.store);

router.get("/chats/:groupId", ChatsController.index);

export default router;
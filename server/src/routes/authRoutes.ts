import { Router } from "express";
import authController from "../controllers/authController";
import { authMiddleware } from "../middleware/auth";
const router: Router = Router();

router.post("/login", authController.login);
router.post("/logout", authMiddleware, authController.logout);
router.post("/register", authController.register);

export default router;

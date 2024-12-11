import { Router } from "express";
import userController from "../controllers/userController";
import { adminOnly } from "../middleware/auth";
const router: Router = Router();

router.get("/", adminOnly, userController.getUsers);
router.get("/:id", userController.getUserById);
router.post("/", adminOnly, userController.createUser);
router.put("/:id", adminOnly, userController.updateUser);
router.delete("/:id", adminOnly, userController.deleteUser);

export default router;

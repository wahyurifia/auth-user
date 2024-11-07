import { Router } from "express";
const router: Router = Router();
import productController from "../controllers/productController";

router.get("/", productController.getProduct);
router.get("/:id", productController.getProductById);
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.patch("/:id", productController.deleteProduct);

export default router;

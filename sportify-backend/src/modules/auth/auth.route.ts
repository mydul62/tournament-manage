import { Router } from "express";
import { loginController, registerController } from "./auth.controller";
import { validateMiddleware } from "../../middlewares/validate.middleware";
import { loginSchema, registerSchema } from "./auth.validation";

const router = Router();

router.post("/login", validateMiddleware(loginSchema), loginController);
router.post("/register", validateMiddleware(registerSchema), registerController);

export const authRoutes = router;

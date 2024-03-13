import express from 'express';
import { AuthenticationController } from './auth.controller';
const router = express.Router();

router.post("/login",AuthenticationController.loginUser)
router.post('/refresh-token', AuthenticationController.refreshToken);

export const AuthenticationRoutes = router;
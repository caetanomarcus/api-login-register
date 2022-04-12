import express from "express";
import AuthController from "../controllers/authControler.js";

const router = express.Router();

router
    .post("/auth", AuthController.signIn)
    .get("/auth/verify", AuthController.confirmToken)


export default router;
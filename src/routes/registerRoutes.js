import express from "express";
import RegisterController from "../controllers/registerController.js";
import verifySignUp from "../middlewares/verifySignUp.js";

const router = express.Router();

router
    .post('/registration', [verifySignUp], RegisterController.registerUser)


export default router;
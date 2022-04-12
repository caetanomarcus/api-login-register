import express from "express";
import AccountController from "../controllers/accountsController.js";

const router = express.Router();

router
    .get("/accounts", AccountController.getUsers)


export default router;
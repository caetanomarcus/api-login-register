import express from "express";
import rolesController from "../controllers/rolesController.js";

const router = express.Router();

router
    .get("/roles", rolesController.getRoles)
    .get("/roles/:id", rolesController.getRole)
    .post("/roles", rolesController.createRole)


export default router;
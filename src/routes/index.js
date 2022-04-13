import express from "express";
import cors from "cors";
import register from './registerRoutes.js'
import accounts from './accountsRoutes.js'
import roles from './rolesRoutes.js'
import auth from './authRoutes.js'


const routes = (app) => {
    app.get("/", (req, res) => {
        res.send("API de cadastro de usuários");
    });
    
    app.use(
        cors(),
        express.json(),
        register,
        roles,
        auth

        );
}

export default routes;
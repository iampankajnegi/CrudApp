import express from "express";

import {Register ,Login} from "../Controller/AuthRegiLogin.js";

const AuthRouter = express.Router();

AuthRouter.post("/RegisterAuth" , Register)
AuthRouter.post("/LoginAuth", Login)

export default AuthRouter
import { Router } from "express";
import UserController from "./app/controllers/UserController";
import AuthController from "./app/controllers/AuthController";
import AuthMiddleware from "./app/middlewares/AuthMiddleware";

const routes = Router();

routes.post("/users", UserController.store);
routes.get("/users", AuthMiddleware, UserController.index);
routes.post("/auth", AuthController.authenticate);

export { routes };

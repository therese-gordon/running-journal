import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import favoriteRoutesRouter from "./api/v1/favoriteRoutesRouter.js";
import authStravaRouter from "./authStravaRouter.js";

const rootRouter = new express.Router();

rootRouter.use("/auth/strava", authStravaRouter)

rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/routes", favoriteRoutesRouter);

rootRouter.use("/", clientRouter);

export default rootRouter;

import express from "express"
import { FavoriteRoute } from "../../../models/index.js";

const favoriteRoutesRouter = new express.Router();

favoriteRoutesRouter.get("/", async (req, res) => {
    try {
        const user = req.user
        const favoriteRoutes = await user.$relatedQuery("favoriteRoutes")
        // const favoriteRoutes = await FavoriteRoute.query()
        return res.status(200).json({ favoriteRoutes: favoriteRoutes})
    } catch (error) {
        return res.status(500).json({error: error})
    }
})

export default favoriteRoutesRouter


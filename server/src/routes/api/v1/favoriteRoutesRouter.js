import express from "express"
import objection from "objection"
const { ValidationError } = objection
import { FavoriteRoute } from "../../../models/index.js";
import cleanUserInput from "../../../services/cleanUserInput.js";

const favoriteRoutesRouter = new express.Router();

favoriteRoutesRouter.get("/", async (req, res) => {
    try {
        const favoriteRoutes = await FavoriteRoute.query()
        return res.status(200).json({ favoriteRoutes: favoriteRoutes})
    } catch (error) {
        return res.status(500).json({error: error})
    }
})

favoriteRoutesRouter.post("/", async (req, res) => {    
    const { body } = req    
    const cleanedInput = cleanUserInput(body.favoriteRoute)
    cleanedInput.userId = req.user.id
    try {
        const favoriteRoute = await FavoriteRoute.query().insertAndFetch(cleanedInput)
        return res.status(201).json({ favoriteRoute })
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({ errors: error.data})
        } return res.status(500).json({ error: error})
    }
})

export default favoriteRoutesRouter


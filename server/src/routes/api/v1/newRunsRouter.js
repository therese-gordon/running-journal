import express from "express"
import objection from "objection"
const { ValidationError } = objection
import { NewRun } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js";

const newRunsRouter = new express.Router()

newRunsRouter.get("/", async (req, res) => {
    try {
        const newRuns = await NewRun.query()
        return res.status(200).json({ newRuns: newRuns })
    } catch (error) {
        return res.status(500).json({error: error})
    }
})

newRunsRouter.post("/", async (req, res) => {
    const { body } = req
    const cleanedInput = cleanUserInput(body.newRun)
    cleanedInput.userId = req.user.id
    try {
        const newRun = await NewRun.query().insertAndFetch(cleanedInput)
        return res.status(201).json({ newRun })
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({ errors: error.data})
        } return res.status(500).json({ error: error})
    }
})

export default newRunsRouter
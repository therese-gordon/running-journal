class RunSerializer {
    static getSummary(run) {
        const allowedAttributes = ["id", "routeName", "hours", "minutes", "seconds", "month", "day", "year", "notes", "userId"]
        let serializedRun = {}
        for (const attribute of allowedAttributes) {
            serializedRun[attribute] = run[attribute]
        }
        return serializedRun
}
}

export default RunSerializer
class RouteSerializer {
    static getSummary(route) {
            const allowedAttributes = ["id", "name", "distance", "userId"]
            let serializedRoute = {}
            for (const attribute of allowedAttributes) {
                serializedRoute[attribute] = route[attribute]
            }
            return serializedRoute
    }
}

export default RouteSerializer
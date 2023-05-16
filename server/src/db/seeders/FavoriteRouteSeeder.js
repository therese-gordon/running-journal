import { FavoriteRoute } from "../../models/index.js";

class FavoriteRouteSeeder {
    static async seed() {
        const favoriteRoutesData = [
            {
                name: "Reservoir Loop",
                distance: 3,
                userId: 1
            },
            {
                name: "To park and back with hill",
                distance: 4,
                userId: 2
            }
        ]

        for (const singleRouteData of favoriteRoutesData) {
            const currentRoute = await FavoriteRoute.query().findOne({ name: singleRouteData.name })
            if (!currentRoute) {
                await FavoriteRoute.query().insert(singleRouteData)
            }
        }
    }
}

export default FavoriteRouteSeeder
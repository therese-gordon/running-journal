import { FavoriteRoute } from "../../models/index.js";

class FavoriteRouteSeeder {
    static async seed() {
        const favoriteRoutesData = [
            {
                name: "Playing Fields Loop",
                distance: "2.5",
                userId: 1
            },
            {
                name: "Reservoir Loop",
                distance: "5.2",
                userId: 1
            },
            {
                name: "Hilltop Park",
                distance: "2.55",
                userId: 1
            },
            {
                name: "River Run",
                distance: "4.14",
                userId: 1
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
import { FavoriteRoute, User } from "../../models/index.js";

class FavoriteRouteSeeder {
    static async seed() {
        const user1 = await User.query().findOne({ email: "test1@email.com" })
        const user2 = await User.query().findOne({ email: "test2@email.com" })

        const favoriteRoutes = [{
            name: "Reservoir Loop",
            distance: 3,
            userId: user1.id
        },
        {
            name: "River Run",
            distance: 6,
            userId: user1.id
        },
        {
            name: "Hills",
            distance: 4,
            userId: user2.id
        }]

        for (const favoriteRoute of favoriteRoutes) {
            await FavoriteRoute.query().insert(favoriteRoute)
        }
    }
}

export default FavoriteRouteSeeder
import { User } from "../../models/index.js";

class UserSeeder {
    static async seed() {
        const usersData = [
            {
                stravaId: "123"
            }
        ]

        for (const singleUserData of usersData) {
            const currentUser = await User.query().findOne({ stravaId: singleUserData.stravaId })
            if (!currentUser) {
                await User.query().insert(singleUserData)
            }
        }
    }
}

export default UserSeeder
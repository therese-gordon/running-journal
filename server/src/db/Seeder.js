/* eslint-disable no-console */
import { connection } from "../boot.js"
// import FavoriteRouteSeeder from "./seeders/FavoriteRouteSeeder.js"
// import UserSeeder from "./seeders/UserSeeder.js"

class Seeder {
  static async seed() {
    // console.log("seeding users...")
    // await UserSeeder.seed()

    // console.log("seeding routes...")
    // await FavoriteRouteSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder
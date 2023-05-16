/* eslint-disable no-console */
import { connection } from "../boot.js"
import FavoriteRouteSeeder from "./seeders/FavoriteRouteSeeder.js"

class Seeder {
  static async seed() {
    // include individual seed commands here
    console.log("seeding routes...")
    await FavoriteRouteSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder
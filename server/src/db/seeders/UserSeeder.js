// import { User } from "../../models/index.js"

// class UserSeeder {
//     static async seed() {
//         const userData = [
//             {
//                 email: "test1@email.com",
//                 password: "123"

//             },
//             {
//                 email: "test2@email.com",
//                 password: "123"
//             }
//         ]

//         for (const singleUserData of userData) {
//             const currentUser = await User.query().findOne({ email: singleUserData.email })
//             if (!currentUser) {
//                 await User.query().insert(singleUserData)
//             } 
//         }
//     }
// }

// export default UserSeeder
import { NewRun } from "../../models/index.js";

class NewRunSeeder {
    static async seed() {
        const newRunsData = [
            {
                routeName: "Reservoir Loop",
                month: "April",
                day: "23",
                year: "2023",
                hours: "0",
                minutes: "26",
                seconds: "52",
                notes: "It was raining, but it was still a great run. I'm going to keep practicing this route.",
                userId: 1
            },
            {
                routeName: "Hilltop Park",
                month: "March",
                day: "1",
                year: "2023",
                hours: "0",
                minutes: "40",
                seconds: "52",
                notes: "I made it up this hill faster than usual. However, I was slower during the second half.",
                userId: 1
            },
            {
                routeName: "River Run",
                month: "May",
                day: "3",
                year: "2023",
                hours: "1",
                minutes: "02",
                seconds: "41",
                notes: "I walked part of the way this time. I'll try it again next week.",
                userId: 1
            }
        ]

        for (const singleRunData of newRunsData) {
            const currentRun = await NewRun.query().findOne({ routeName: singleRunData.routeName })
            if (!currentRun) {
                await NewRun.query().insert(singleRunData)
            }
        }
    }
}

export default NewRunSeeder
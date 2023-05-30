import { Strategy as StravaStrategy } from "@riderize/passport-strava-oauth2"
import dotenv from "dotenv"
import User from "../models/User.js"

dotenv.config();

const stravaAuthHandler = (accessToken, refreshToken, profile, done) => {
    User.query()
        .findOne({ stravaId: profile?.id })
        .then((user) => {
            if (user) {
                user.$query().patchAndFetch({accessToken: accessToken}).then((user) => { return done(null, user) }) 
            } else {
                User.query()
                .insertAndFetch({
                    stravaId: profile.id,
                    accessToken: accessToken,
                    }).then((user) => { 
                        console.log(user.id)
                        return done(null, user) 
                    })    
            }
        }) 
}

const stravaStrategy = new StravaStrategy({
        clientID: process.env.STRAVA_CLIENT_ID,
        clientSecret: process.env.STRAVA_CLIENT_SECRET,
        // callbackURL: "http://localhost:3000/auth/strava/callback",
        callbackURL: "https://running-journal.herokuapp.com/auth/strava/callback",
    },
    stravaAuthHandler
)

export default stravaStrategy
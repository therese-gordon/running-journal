import { Strategy as StravaStrategy } from "passport-strava-oauth2"
import dotenv from "dotenv"

import User from "../models/User.js";

dotenv.config();

const stravaAuthHandler = (accessToken, refreshToken, profile, done) => {

    User.query()
    .findOne({ stravaId: profile?.id })
    .then((user) => {
        if (user) {
            return done(null, user);
        }

        console.log(profile)

        User.query().insertAndFetch({
            stravaId: profile.id,
            email: profile.emails[0].value
        }).then((user) => {
            return done(null, user);
        })
    });
}

const stravaStrategy = new StravaStrategy({
        clientID: process.env.STRAVA_CLIENT_ID,
        clientSecret: process.env.STRAVA_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/strava/callback",
    },
    stravaAuthHandler
)

export default stravaStrategy
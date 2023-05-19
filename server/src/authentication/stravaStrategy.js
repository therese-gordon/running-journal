// import { Strategy as StravaStrategy } from "passport-strava-oauth2"
import { Strategy as StravaStrategy } from "@riderize/passport-strava-oauth2"

import dotenv from "dotenv"

import User from "../models/User.js"

dotenv.config();

const stravaAuthHandler = (accessToken, refreshToken, profile, done) => {
    // data that we get back from strava on login is all in the `profile` variable

    // Todo
    // determine if what other info from profile I want to save into my database
    // make migrations for that data
    // update the insertAndFetch below to inser that data

    User.query()
    .findOne({ stravaId: profile?.id })
    .then((user) => {
        if (user) {
            user.$query().patchAndFetch({accessToken: accessToken}).then((user) => {
                return done(null, user)
            })
        }

        // firstname: profile?.firstname
        console.log(profile)
        console.log(profile.firstname)

    User.query().insertAndFetch({
        stravaId: profile.id,
        // firstname: profile.firstname,
        accessToken: accessToken
        }).then((user) => {
            return done(null, user)
        })    
        })
    }

const stravaStrategy = new StravaStrategy({
        clientID: process.env.STRAVA_CLIENT_ID,
        clientSecret: process.env.STRAVA_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/strava/callback",
    },
    stravaAuthHandler
)

export default stravaStrategy
// import { Strategy as StravaStrategy } from "passport-strava-oauth2"
import { Strategy as StravaStrategy } from "@riderize/passport-strava-oauth2"

// const StravaStrategy = require('@riderize/passport-strava-oauth2').Strategy;


import dotenv from "dotenv"

import User from "../models/User.js";

dotenv.config();


const stravaAuthHandler = (accessToken, refreshToken, profile, done) => {

    console.log(profile)

    // remove requirements for email and password on the users table (both in migration and on jsonSchema validation)
    // immediatel;y add a stravaId to your users table 
    // also add an "accessToken" to your users table
    // may as well add firstname, lastname and username
    User.query()
    .findOne({ stravaId: profile?.id })
    .then((user) => {
        if (user) {
            return done(null, user);
        }

        console.log(profile)

        User.query().insertAndFetch({
            stravaId: profile.id,
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
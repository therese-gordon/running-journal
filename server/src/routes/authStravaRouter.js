import express from "express"
import passport from "passport"

const authStravaRouter = new express.Router()

// authStravaRouter.get('/', passport.authenticate('strava'))
authStravaRouter.get('/', passport.authenticate('strava', {
      scope: ['profile:read_all,activity:read_all'],
    })
  );

authStravaRouter.get('/callback', passport.authenticate('strava',
    {
        successRedirect: "/profile",
        failureRedirect: "/auth/failure"
    })
)

export default authStravaRouter
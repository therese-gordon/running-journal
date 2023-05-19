import express from "express";
import passport from "passport";
import got from "got"

const sessionRouter = new express.Router();

sessionRouter.post("/", (req, res, next) => {
  return passport.authenticate("local", (err, user) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }

    if (user) {
      return req.login(user, () => {
        return res.status(201).json(user);
      });
    }

    return res.status(401).json({
      message:
        "Either email or password are incorrect. Please try again, or Sign Up to create a new account.",
    });
  })(req, res, next);
});

sessionRouter.get("/current", async (req, res) => {


  // $ http GET "https://www.strava.com/api/v3/athletes/{id}/routes?page=&per_page=" "Authorization: Bearer [[token]]"

  // got request to the above path 

  if (req.user) {

    const response = await got({
        url: `https://www.strava.com/api/v3/athletes/${req.user.stravaId}}/routes`,
        headers: {
          "Authorization": `Bearer ${req.user.accessToken}`
        }
      }
    )
    console.log(response.body)

    res.status(200).json(req.user);
  } else {
    res.status(401).json(undefined);
  }
});

sessionRouter.delete("/", (req, res) => {
  req.logout();
  console.log("test")
  console.log(req.cookies)
  res.status(200).json({ message: "User signed out" });
});

export default sessionRouter;

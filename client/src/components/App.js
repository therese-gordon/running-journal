import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import TopBar from "./layout/TopBar";
import AuthenticatedRoute from "./authentication/AuthenticatedRoute"
import UserProfile from "./UserProfile"
import UserMainPage from "./UserMainPage"
import NewRouteForm from "./NewRouteForm";
import NewRunForm from "./NewRunForm";
import FavoriteRoutesList from "./FavoriteRoutesList";
import WelcomePage from "./WelcomePage";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch(err) {
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    fetchCurrentUser()
  }, [])

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <AuthenticatedRoute exact path="/profile" component={UserProfile} user={currentUser} />
        <AuthenticatedRoute exact path="/welcome" component={UserMainPage} user={currentUser} />
        <AuthenticatedRoute exact path="/routes" component={FavoriteRoutesList} user={currentUser} />
        <AuthenticatedRoute exact path="/add-a-route" component={NewRouteForm} user={currentUser} />
        <AuthenticatedRoute exact path="/log-a-run" component={NewRunForm} user={currentUser} />
      </Switch>
    </Router>
  );
};

export default hot(App);

import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

const TopBar = ({ user }) => {
  const unauthenticatedListItems = [
    <li key="strava-sign-in">
      <a href="/auth/strava">Sign In with Strava</a>
    </li>,
    <li key="sign-in">
      <Link to="/user-sessions/new">Sign In</Link>
    </li>,
    <li key="sign-up">
      <Link to="/users/new" className="button">
        Sign Up
      </Link>
    </li>,
  ];

  const authenticatedListItems = [
    <li key="strava-sign-in">
    <a href="/auth/strava">Sign In with Strava</a>
  </li>,
    <li key="welcome">
      <Link to="/welcome">My Homepage</Link>
    </li>,
    <li key="profile">
      <Link to="/profile">My Profile</Link>
    </li>,
    <li key="sign-out">
      <SignOutButton />
    </li>,
  ];

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">🏃‍♀️</li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">{user ? authenticatedListItems : unauthenticatedListItems}</ul>
      </div>
    </div>
  );
};

export default TopBar;

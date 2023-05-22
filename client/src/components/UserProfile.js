import React, { useState, useEffect } from "react"

const UserProfile = ({ user }) => {

    // const []

    // useEffect(() => {

    // }, [])
    return (
        <div className="profile-page">
            <h3 className="profile-title">Account Information</h3>
            <p className="profile-content">Your Email: {user.email}</p>
            <p className="profile-content">Strava Id: {user.stravaId}</p>
        </div>
    )
}

export default UserProfile
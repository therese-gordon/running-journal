import React, { useState, useEffect } from "react"

const UserProfile = ({ user }) => {

    // const []

    // useEffect(() => {

    // }, [])
    return (
        <div>
            <h3>Account Information</h3>
            <p>Strava Id: {user.stravaId}</p>
            <p>{user.firstname}</p>
        </div>
    )
}

export default UserProfile
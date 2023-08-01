import React, { useState, useEffect } from "react"

const UserProfile = ({ user }) => {
    
    return (
        <div className="profile-page">
            <h3 className="profile-title">Account Information</h3>
            <p className="profile-content">Strava ID: {user.stravaId}</p>
        </div>
    )
}

export default UserProfile
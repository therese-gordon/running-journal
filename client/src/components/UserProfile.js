import React from "react"

const UserProfile = ({ user }) => {
    return (
        <div className="profile-page">
            <h3 className="profile-title">Account Information</h3>
            <p className="profile-content">Your Email: {user.email}</p>
        </div>
    )
}

export default UserProfile
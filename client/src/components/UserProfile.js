import React from "react"

const UserProfile = ({ user }) => {
    return (
        <div>
            <h3>Account Information</h3>
            <h4>Your Email:</h4>
            <p>{user.email}</p>
        </div>
    )
}

export default UserProfile
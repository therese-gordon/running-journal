import React from "react"
import { Link } from "react-router-dom"

const UserMainPage = ({ user }) => {
    return (
        <div>
            <h2>Welcome to your main page</h2>
            <Link to="/add-a-route" className="mainPageLinks">Add a route</Link>
            <Link to="/log-a-run" className="mainPageLinks">Log a run</Link>
            <Link to="/my-routes" className="mainPageLinks">View my saved routes</Link>
            <Link to="/my-runs" className="mainPageLinks">View my completed runs</Link>
        </div>
    )
}

export default UserMainPage
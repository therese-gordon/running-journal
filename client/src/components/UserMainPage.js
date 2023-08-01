import React from "react"
import { Link } from "react-router-dom"

const UserMainPage = ({ }) => {

    return (
        <div className="main-page">
            <Link to="/add-a-route" className="main-page-links">Add a route</Link>
            <Link to="/log-a-run" className="main-page-links">Log a run</Link>
            <Link to="/routes" className="main-page-links">View my saved routes</Link>
            <Link to="/runs" className="main-page-links">View my completed runs</Link>
        </div>
    )
}

export default UserMainPage
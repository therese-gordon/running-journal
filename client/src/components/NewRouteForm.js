import React from "react"

const NewRouteForm = () => {
    
    return (
        <>
        <form className="form-container">
            <h3>Add A New Route</h3>
            <label htmlFor="name" className="form-title">Route Name</label>
            <input type="text" name="name" className="form-input"/>
            <label htmlFor="distance" className="form-title">Distance (miles)</label>
            <input type="number" min="0" name="distance" className="form-input"/>
            <input type="submit" className="button" value="Submit"/>
        </form>
        </>
    )
}

export default NewRouteForm
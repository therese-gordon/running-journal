import React from "react"

const NewRouteForm = () => {
    
    return (
        <>
        <form className="form-container">
            <h3>Add A New Route</h3>
            <label htmlFor="name">Route Name</label>
            <input type="text" name="name"/>
            <label htmlFor="distance">Distance (miles)</label>
            <input type="number" min="0" name="distance"/>
            <input type="submit" className="button" value="Submit"/>
        </form>
        </>
    )
}

export default NewRouteForm
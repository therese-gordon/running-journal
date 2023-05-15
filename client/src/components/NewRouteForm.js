import React from "react"

const units = ["", "km", "mi"]

const NewRouteForm = () => {
    const dropdown = units.map(unit => {
        return (
            <option key={unit} value={unit}>
                {unit}
            </option>
        )
    })

    return (
        <>
        <form>
            <h3>Add A New Route</h3>
            <label htmlFor="name">Route Name</label>
            <input type="text" name="name"/>
            <label htmlFor="distance">Distance</label>
            <input type="number" name="distance"/>
            <select name="units">{dropdown}</select>
            <input type="submit" className="button" value="Submit"/>
        </form>
        </>
    )
}

export default NewRouteForm
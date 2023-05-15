import React from "react"

const NewRunForm = () => {

    return (
        <>
        <form>
            <h3>Enter a New Run</h3>
            <label htmlFor="name">Route Name</label>
            <select name="name">Option</select>
            <label htmlFor="date">Date</label>
            <input type="date" name="date"></input>
            <label htmlFor="time">Time</label>
            <input type="text" name="time"></input>
            <label htmlFor="distance">Distance</label>
            <input type="text" name="distance"></input>
            <label htmlFor="notes">Notes</label>
            <textarea name="notes"></textarea>
            <input type="submit" className="button" value="Submit"/>
        </form>
        </>
    )

}

export default NewRunForm
import React from "react"

const NewRunForm = () => {

    return (
        <>
        <form className="form-container">
            <h3>Enter a New Run</h3>
            <label htmlFor="name">Route Name</label>
            <select name="name"></select>
            <label htmlFor="date">Date</label>
            <input type="date" name="date"></input>
            <label htmlFor="time">Time</label>
            <div className="time-field">
            <input type="number" min="0" max="24" name="time"></input>
            <label htmlFor="time">:</label>
            <input type="number" min="0" max="59" name="time"></input>
            <label htmlFor="time">:</label>
            <input type="number" min="0" max="59" name="time"></input>
            </div>
            <label htmlFor="notes">Notes</label>
            <textarea name="notes"></textarea>
            <input type="submit" className="button" value="Submit"/>
        </form>
        </>
    )

}

export default NewRunForm
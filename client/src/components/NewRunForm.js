import React from "react"

const NewRunForm = () => {

    return (
        <>
        <form className="form-container">
            <h3>Enter a New Run</h3>
            <label htmlFor="name" className="form-title">Route Name</label>
            <select name="name" className="form-input"></select>
            <label htmlFor="date" className="form-title">Date</label>
            <input type="date" name="date" className="form-input"></input>
            <label htmlFor="time" className="form-title">Time</label>
            <input type="text" name="time" className="form-input"></input>
            <label htmlFor="notes" className="form-title">Notes</label>
            <textarea name="notes" className="form-input"></textarea>
            <input type="submit" className="button" value="Submit"/>
        </form>
        </>
    )

}

export default NewRunForm
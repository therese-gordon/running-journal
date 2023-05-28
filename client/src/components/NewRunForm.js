import React, {useState} from "react"
import translateServerErrors from "../services/translateServerErrors"
import ErrorList from "./layout/ErrorList"
import { Redirect } from "react-router-dom"

const NewRunForm = () => {
    const [runData, setRunData] = useState({
        routeName: "",
        date: "",
        hours: "",
        minutes: "",
        seconds: "",
        notes: ""
})

    const [errors, setErrors] = useState([])
    const [shouldRedirect, setShouldRedirect] = useState(false)

    const postNewRun = async () => {
        try {
            const response = await fetch('/api/v1/runs', {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json"
                }),
                body: JSON.stringify({ newRun: runData })
            })
            if (!response.ok) {
                if (response.status === 422) {
                    const body = await response.json()
                    const newErrors = translateServerErrors(body.errors)
                    setErrors(newErrors)
                } else {
                    const errorMessage = `${response.status} (${response.statusText})`
                    const error = new Error(errorMessage)
                    throw error
                }
            } else {
                const body = response.json()
                setShouldRedirect(true)
            }
        } catch(err) {
            console.log(err, "error")
            console.error("Error in fetch", err.message)
        }
    }

    const handleChange = (event) => {
        setRunData({
            ...runData,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        postNewRun()
    }

    if(shouldRedirect === true) {
        return <Redirect to="/runs"/>
    }

    return (
        <>
        <form className="form-container" onSubmit={handleSubmit}>
            <h3>Enter a New Run</h3>
            <ErrorList errors={errors} />
            <label htmlFor="routeName" className="form-title">Route Name</label>
            <input 
                type="text"
                name="routeName" 
                className="form-input"
                value={runData.routeName}
                onChange={handleChange}
            />
            <label htmlFor="date" className="form-title">Date</label>
            <input 
                type="date" 
                name="date" 
                className="form-input"
                value={runData.date}
                onChange={handleChange}
            />
            <label htmlFor="time" className="form-title">Hours</label>
            <input  
                type="text"
                name="hours" 
                min="0" 
                max="23" 
                className="form-input" 
                value={runData.hours}
                onChange={handleChange}
            />
            <label htmlFor="time" className="form-title">Minutes</label>
            <input 
                type="text" 
                name="minutes" 
                min="0" 
                max="59" 
                className="form-input" 
                value={runData.minutes}
                onChange={handleChange}
            />
            <label htmlFor="time" className="form-title">Seconds</label>
            <input 
                type="text" 
                name="seconds" 
                min="0" 
                max="59" 
                className="form-input" 
                value={runData.seconds}
                onChange={handleChange}
            />
            <label htmlFor="notes" className="form-title">Notes</label>
            <textarea
                type="text" 
                name="notes" 
                className="form-input"
                value={runData.notes}
                onChange={handleChange}
            />
            <input type="submit" className="button" value="Submit"/>
        </form>
        </>
    )
}

export default NewRunForm
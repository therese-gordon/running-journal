import React, { useState, useEffect } from "react"
import translateServerErrors from "../services/translateServerErrors"
import ErrorList from "./layout/ErrorList"
import { Redirect } from "react-router-dom"

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
const years = ["2023", "2024"]

const NewRunForm = () => {
    const [runData, setRunData] = useState({
        routeName: "",
        month: "",
        day: "",
        year: "",
        hours: "0",
        minutes: "0",
        seconds: "0",
        notes: ""
})

const [errors, setErrors] = useState([])
const [shouldRedirect, setShouldRedirect] = useState(false)
const [savedRoutesList, setSavedRouteList] = useState([])

    const fetchSavedRoutesList = async () => {
        try {
            const response = await fetch("/api/v1/routes")
            if (response.ok) {
                const data = await response.json()
                setSavedRouteList(data.favoriteRoutes)
            } else {
                console.error(response.statusText)
            } 
        } catch (error) {
            console.error(error)
            }
    }

    useEffect(() => {
        fetchSavedRoutesList()
    }, [])

    const monthsDropDown = months.map(month => {
        return (
            <option key={month} value={month}>
                {month}
            </option>
        )
    })

    const daysDropDown = days.map(day => {
        return (
            <option key={day} value={day}>
                {day}
            </option>
        )
    })

    const yearsDropDown = years.map(year => {
        return (
            <option key={year} value={year}>
                {year}
            </option>
        )
    })

    const routeDropDown = savedRoutesList.map(route => {
        return (
            <option key={route.id} value={route.name}>
                {route.name}, {route.distance} miles
            </option>
        )
    }) 

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
            <select name="routeName" className="form-input" value={runData.routeName} onChange={handleChange}>
                <option value="">Select a route</option>
                {routeDropDown}
            </select>    
            <label htmlFor="date" className="form-title">Date</label>
            <div className="date-time-row">
            <select name="month" value={runData.month} onChange={handleChange}>
                <option value="">Month</option>
                {monthsDropDown}
            </select>
            <select name="day" value={runData.day} onChange={handleChange}>
                <option value="">Day</option>
                {daysDropDown}
            </select>
            <select name="year" value={runData.year} onChange={handleChange}>
            <option value="">Year</option>
                {yearsDropDown}
            </select>
            </div>
            <div className="date-time-row">
                <div className="time-column">
                    <label htmlFor="hours" className="form-title">Hours</label>
            <input  
                type="text"
                name="hours" 
                min="0" 
                max="23" 
                className="form-input" 
                value={runData.hours}
                onChange={handleChange}
            />
            </div>
            <div className="time-column">
                    <label htmlFor="hours" className="form-title">Minutes</label>
            <input 
                type="text" 
                name="minutes" 
                min="0" 
                max="59" 
                className="form-input" 
                value={runData.minutes}
                onChange={handleChange}
            />
            </div>
            <div className="time-column">
                    <label htmlFor="hours" className="form-title">Seconds</label>
            <input 
                type="text" 
                name="seconds" 
                min="0" 
                max="59" 
                className="form-input" 
                value={runData.seconds}
                onChange={handleChange}
            />
            </div>
            </div>
            <label htmlFor="notes" className="form-title">Notes</label>
            <textarea
                type="text" 
                name="notes" 
                maxLength="300"
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
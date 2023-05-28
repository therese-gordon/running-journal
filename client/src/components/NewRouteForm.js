import React, {useState} from "react"
import translateServerErrors from "../services/translateServerErrors"
import ErrorList from "./layout/ErrorList"
import { Redirect } from "react-router-dom"

const NewRouteForm = () => {
    const [routeData, setRouteData] = useState({
            name: "",
            distance: ""
    })

    const [errors, setErrors] = useState([])
    const [shouldRedirect, setShouldRedirect] = useState(false)

    const postNewRoute = async () => {
        try {
            const response = await fetch('/api/v1/routes', {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json"
                }),
                body: JSON.stringify({ favoriteRoute: routeData })
            })
            console.log(response, "response")
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
            console.error("Error in fetch", err.message)
        }
    }

    const handleChange = (event) => {
        setRouteData({
            ...routeData,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        postNewRoute()
    }

    if(shouldRedirect === true) {
        return <Redirect to="/routes"/>
    }

    return (
        <>
        <form className="form-container" onSubmit={handleSubmit}>
            <h3>Add A New Route</h3>
            <ErrorList errors={errors} />
            <label htmlFor="name" className="form-title">Route Name</label>
            <input 
                type="text" 
                name="name" 
                className="form-input"
                value={routeData.name}
                onChange={handleChange}
            />
            <label htmlFor="distance" className="form-title">Distance (miles)</label>
            <input 
                type="number" 
                min="0" 
                name="distance" 
                className="form-input"
                value={routeData.distance}
                onChange={handleChange}
            />
            <input type="submit" className="button" value="Submit"/>
        </form>
        </>
    )
    }

export default NewRouteForm
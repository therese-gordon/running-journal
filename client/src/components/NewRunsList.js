import React, {useState, useEffect} from "react"

const NewRunsList = () => {
    const [newRuns, setNewRuns] = useState([])

    const fetchFavoriteRuns = async () => {
        try {
            const response = await fetch("/api/v1/runs")
            if (response.ok) {
                const data = await response.json()
                setNewRuns(data.newRuns)
            } else {
                console.error(response.statusText)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchFavoriteRuns()
    }, [])

    const runsList = newRuns.map((newRun) => {
        return (
            <div key={newRun.id}>
            <div>Name: {newRun.routeName}</div>
            <div>Date: {newRun.date}</div>
            <div>Time: {newRun.hours}:{newRun.minutes}:{newRun.seconds}</div>
            <div>Notes: {newRun.notes}</div>
            <br></br>
            </div> 
        )    
    })

    return (
        <div className="list-page">
        <h3 className="list-title">Your Completed Runs</h3>
        <div className="list-items">{runsList}</div>
        </div>
    )

}

export default NewRunsList


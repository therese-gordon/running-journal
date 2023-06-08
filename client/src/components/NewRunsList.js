import React, {useState, useEffect} from "react"

const NewRunsList = () => {
    const [newRuns, setNewRuns] = useState([])

    const fetchNewRuns = async () => {
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
        fetchNewRuns()
    }, [])

    const runsList = newRuns.map((newRun) => {
        return (
            <div className="list-item-ru" key={newRun.id}>
            <div><span id="bold-words">Name:</span> {newRun.routeName}</div>
            <div><span id="bold-words">Date:</span> {newRun.month} {newRun.day}, {newRun.year}</div>
            <div><span id="bold-words">Time: </span>{newRun.hours} hours, {newRun.minutes} minutes, {newRun.seconds} seconds</div>
            <div><span id="bold-words">Notes:</span> {newRun.notes}</div>
            <br></br>
            </div> 
        )    
    })

    return (
        <div>
        <h3 className="list-title">Your Completed Runs</h3>
        <div className="list-items-ru">{runsList}</div>
        </div>
    )

}

export default NewRunsList


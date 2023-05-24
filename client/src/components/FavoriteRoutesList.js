import React, { useState, useEffect } from "react"

const FavoriteRoutesList = () => {
    const [favoriteRoutes, setFavoriteRoutes] = useState([])

    const fetchFavoriteRoutes = async () => {
        try {
            const response = await fetch("/api/v1/routes")
            if (response.ok) {
                const data = await response.json()
                setFavoriteRoutes(data.favoriteRoutes)
            } else {
                console.error(response.statusText)
            } 
        } catch (error) {
            console.error(error)
            }
        }

    useEffect(() => {
        fetchFavoriteRoutes()
    }, [])

    const routesList = favoriteRoutes.map((favoriteRoute) => {
        return (
            <div key={favoriteRoute.id}>
            <div>Name: {favoriteRoute.name}</div>
            <div>Miles: {favoriteRoute.distance}</div>
            <br></br>
            </div> 
        )    
    })

    return (
        <div className="list-page">
        <h3 className="list-title">Your Saved Routes</h3>
        <div className="list-items">{routesList}</div>
        </div>
    )
}

export default FavoriteRoutesList
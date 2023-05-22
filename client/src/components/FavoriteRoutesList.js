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
            <p key={favoriteRoute.id}>
            Name: {favoriteRoute.name} 
            <br></br>
            Miles: {favoriteRoute.distance}
            </p> 
        )    
    })

    return (
        <div className="list-page">
        <h3 className="list-title">Your Saved Routes</h3>
        <p className="list-items">{routesList}</p>
        </div>
    )
}

export default FavoriteRoutesList
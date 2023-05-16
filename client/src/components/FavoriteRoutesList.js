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
        <>
        <h2>Your Saved Routes</h2>
        <div>{routesList}</div>
        </>
    )
}

export default FavoriteRoutesList
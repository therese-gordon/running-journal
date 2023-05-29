import React from "react"

const WelcomePage = () => {
    return (
        <>
        <div className="login-info">
        <p>Login with the following Strava credentials: thereseagordon@gmail.com - runn!ng123</p>
        </div>
        <div className="welcome-page"> 
            <h2 className="welcome-title">Welcome to <span id="app-name-welcome">Trail Tales</span></h2>
            <img src="https://i.imgur.com/w2hQc18.jpg" alt="Runner at sunset" className="welcome-image" />
        </div>
        </>
    )
}

export default WelcomePage
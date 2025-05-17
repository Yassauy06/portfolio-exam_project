import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
    return(
        <div className="welcomePage">
            <div className="welcome-content">
        <h1 style={{color:"white",fontSize:'60px',textShadow: '0 0 20px rgba(255,255,255,.6)', marginBottom:30}}>My portfolio</h1>
        <Link className="link-main" to='/Main' >continue...</Link>
            </div>
        </div>
    )
}
export default WelcomePage
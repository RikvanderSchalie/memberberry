import React from 'react';
import "./welcome.css";
import foto from "../images/vintage2.jpg";
function WelkomPage ()

{
    return(
        <div className="test">

            <div className="greenscreen">
                <h1 className="titeltekst">Memberberry</h1>
                <h3 className="welcome">Welcome</h3>
                <h3 className="letsmake">Lets make some lists !</h3>
                <p>
                    <button className="button" onClick={() => console.log ("BOEMM!!") }></button>
                </p>
            </div>
        </div>


    );
}

export default WelkomPage ;
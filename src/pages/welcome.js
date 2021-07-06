import React from 'react';
import "./welcome.css";
import foto from "../images/vintage2.jpg";
function WelkomPage ()

{
    return(
        <div className="test">
            <div className="grid-container">

                <shape className="shape"></shape>
                    <shape className="shape-green" id="grid-item" >
                        <h1 className="titeltekst">Memberberry</h1>
                        <h3 className="welcome">Welcome</h3>
                        <h3 className="letsmake">Lets make some lists !</h3>
                        <p><button className="button"></button></p>
                        <p><button className="button" onClick={() => console.log ("BOEM!!")}  ></button></p>
                    </shape>
            </div>


            );
            }

            export default WelkomPage ;
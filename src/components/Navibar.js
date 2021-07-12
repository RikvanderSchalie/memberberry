import React from "react";
import Navibarstyle from "../components/Navibarstyle.css";

function clicktest(){
    console.log("test!")
}

function navibar(){
    return (

        <div className="navibar">


            <button
                className="navbuthome"
                /*&#127968;*/
            ></button>

            <button
                className="navbutlist"
                /*&#128195;*/
            >&#128195;</button>

            <button
                className="navbutset"
                /*&#9881;*/
            >Go</button>

        </div>
    )
}

export default navibar
import React from "react";
import Inputpassrepstyle from "../components/Inputpassrepstyle.css";

function Inputpassrep() {
    return(
        <label htmlFor="password-field" className="passwordrepcomp">

            <input
                className="passwordrepcomp"
                placeholder="  &#128272;   Repeat password"
            ></input>
        </label>
    )

}

export default Inputpassrep
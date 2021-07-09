import React from "react";
import Inputmailstyle from "../components/Inputmailstyle.css";

function Inputmail(){
    return (
<label htmlFor="email-field" className="signupcomp">
    <input
        type="email"
        className="signupcomp"
        placeholder="  &#128232;   Email"
    />
</label>
    )
}

export default Inputmail
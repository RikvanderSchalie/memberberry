import React from "react";
import Inputmailstyle from "../components/Inputmailstyle.css";


function Inputmail(){




    return (
<form htmlFor="email-field" className="signupcomp" >
    <input
        onChange={e => (e.target.value)}
        /*value={ email }*/
        type="email"
        name='email'
        className="signupcomp"
        placeholder="  &#128232;   Email"
    />
</form>
    )
}

export default Inputmail
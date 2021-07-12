import React from 'react';
import "./home.css";
import Greensquare from "../components/Greensquare"
import Navibar from "../components/Navibar";

import { Link } from 'react-router-dom';

/*components*/
import Buttonsign from "../components/Buttonsign";
import Inputemail from "../components/Inputemail";
import Inputpassw from "../components/Inputpassw";
import Inputpassrep from "../components/Inputpassrep";



function SigninPage ()

{
    return(
        <div className="backgroundhome">
            {/*<div className="greenscreenhome">
                <h1 className="titelteksthome">sign in</h1>
                <h3 className="memberhome">not a member ? <Link to="/Signup">let's sign up</Link></h3>
            </div>
            <Inputemail></Inputemail>
            <Inputpassw></Inputpassw>*/}
            <Greensquare></Greensquare>
            {/*<Navibar></Navibar>*/}


            <label htmlFor="search" className="search">
                <input
                    type="email"
                    className="search"
                    placeholder=" &#128269;  Search "
                />
            </label>



        </div>



    );
}

export default SigninPage ;




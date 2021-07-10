import React from 'react';
import "./Signinstyle.css";
import { Link } from 'react-router-dom';

/*components*/
import Buttonsign from "../components/Buttonsign";
import Inputemail from "../components/Inputemail";
import Inputpassw from "../components/Inputpassw";
import Inputpassrep from "../components/Inputpassrep";



function SigninPage ()

{
    return(
        <div className="background2">
            <div className="greenscreen2">
                <h1 className="titeltekst2">sign in</h1>
                <h3 className="member2">not a member ? <Link to="/Signup">let's sign up</Link></h3>
                <Inputemail></Inputemail>
                <Inputpassw></Inputpassw>

                <Buttonsign></Buttonsign>

            </div>



        </div>



    );
}

export default SigninPage ;

                {/*<p><Link to="/signup">Sign-up</Link></p>*/}


import React from 'react';
import "./signup.css";
import { Link } from 'react-router-dom';
import Buttonsign from "../components/Buttonsign";


function SignUpPage ()

{
    return(
        <div className="background1">
           <div className="greenscreen1">
               <h1 className="titeltekst1">sign up</h1>
               <h3 className="member1">Member ? <Link to="/login">let's sign in</Link></h3>

               <label htmlFor="email-field" className="signup1">
                   <input
                       type="email"
                       className="signup1"
/*                     id="email-field"
                       name="email"*/
                       placeholder="  &#128232;   Email"
                   />
               </label>

               <label htmlFor="password-field" className="password1">
                   <input
                       type="password"
                       className="password1"
                       placeholder="  &#128272;   Password"
                   />
               </label>

               <label htmlFor="password-field" className="password2">
                   <input
                       type="password"
                       className="password2"
                       placeholder="  &#128272;   Repeat password"
                   />
               </label>

               <Buttonsign></Buttonsign>

           </div>



        </div>



    );
}

export default SignUpPage ;
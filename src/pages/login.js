import React from 'react';
import "./home.css";
import { Link } from 'react-router-dom';

function LoginPage ()

{
    return(
        <div className="App">
            <header className="App-header">
                <a className="App-link"
                >
                    Login

                </a>

                <p><Link to="/signup">Sign-up</Link></p>

            </header>



        </div>



    );
}

export default LoginPage ;
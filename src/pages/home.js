import React from 'react';
import "./home.css";
import { Link } from 'react-router-dom';

function HomePage ()

{
    return(
        <div className="App">
            <header className="App-header">
                <a className="App-link"
                >
                    memberBerry Home

                </a>

                <p>click <Link to="/welkom">hier</Link> voor welkom</p>
            </header>



        </div>



    );
}

export default HomePage ;
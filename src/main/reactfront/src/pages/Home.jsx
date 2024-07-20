import React from 'react';
import logo from '../logo.svg';
import '../css/Home.css';
import '../js/Home.js';
import Application from './Application.jsx';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Home() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          FoodRoad
        </a>
      </header> */}
      
      <div className='Home_Main'>
        <div className='Home_Header'>

        </div>

        <div id='Home_Content' className='Home_Content'>
          <Application></Application>

        </div>

        <div className='Home_Tail'>

        </div>

      </div>


      {/* Button to navigate to UserList screen */}

    </div>
  );
}

export default Home;

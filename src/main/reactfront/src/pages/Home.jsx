import React from 'react';
import '../css/Home.css';
import '../css/Common/Common.css';
import '../js/Home.js';
import Application from './Application.jsx';

function Home() {
  return (
    <div className="App">

      <div className='Home_Main'>
        <div className='Home_Header'>

        </div>

        <div id='Home_Content' className='Home_Content'>
          <Application></Application>

        </div>

        <div className='Home_Tail'>

        </div>

      </div>

    </div>
  );
}

export default Home;

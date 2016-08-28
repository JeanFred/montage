import React from 'react';
import './App.css';
import './vendor/css/bootstrap.css';
import Round from './admin/round';
import RoundClosing from './admin/closing'

function onImport() {
    console.log('waaaa!');
}

function onActivateRound() {
    console.log('waaah');
}
const App = () => (
    <div>
      <div className="navbar navbar-inverse">
        <div className='container'>
          <div className='navbar-header'>
            <a className='navbar-brand'>Yet Another Jury Tool</a>
          </div>
          <div className='collapse navbar-collapse pull-right'>
            <ul className='nav navbar-nav'>
              <li><a href='//localhost:5000/login'>Login</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
            <RoundClosing type='bool'
                isPreviewed={true}
                imagesCount={90}
                uploadersCount={60}
                isCompleted={true}
                />
        </div>
      </div>
      </div>
)

export default App;

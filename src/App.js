import React, {useState} from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import useToken from './useToken'
import { faAddressBook, faEnvelope, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faAddressBook, faBars, faEnvelope, faSearch);


function App() {
 const {token, setToken} = useToken();
 const [inputText, setInputText] = useState("")
  if(!token){
    return <Login setToken={setToken} />
  }
  return (
    <div className="Wrapper">
      <div className="nav-bar">
        <FontAwesomeIcon icon="bars" id="bars" size="lg" />
        <h2 id="logo">SMapp</h2>
        <input type="text" id="searchbar" />
        <FontAwesomeIcon icon="search" id="search"  />
        
        <div id="rightnav">
          <FontAwesomeIcon icon="address-book" id="add-book" size="lg" />
          <FontAwesomeIcon icon="envelope" id="envelope" size="lg" />
        </div>
      </div>
      <body>
        <div className="preview-tiles">
          <Dashboard />
          <Dashboard />
          <Dashboard />
        </div>
      </body>
      <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/preferences">
          <Preferences />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

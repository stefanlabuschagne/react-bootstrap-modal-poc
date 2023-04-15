import logo from './logo.svg';
import './App.css';

import UncontrolledExample from './Components/Tabs';

import MyVerticallyCenteredModal from './Components/Modals'

import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
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
          Learn React
        </a>
      </header>

      <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>

    </div>
  );
}

export default App;

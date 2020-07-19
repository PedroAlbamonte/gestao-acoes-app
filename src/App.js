import React from 'react';

import './global.css';

import Routes from './routes';
import SideBar from "./components/Sidebar";

function App() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} width={ '200px' } />

      <div id="page-wrap">
        <Routes />
      </div>
    </div>
  );
}

export default App;

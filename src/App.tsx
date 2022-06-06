import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Profile} from "./components/Profile";
import {NavBar} from "./components/NavBar";

function App() {
   return (
      <div className="App">
            <Header/>
            <NavBar/>
            <Profile/>
      </div>
   );
}

export default App;

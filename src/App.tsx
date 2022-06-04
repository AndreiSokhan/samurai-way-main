import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Content} from "./components/Content";
import {NavBar} from "./components/NavBar";

function App() {
   return (
      <div className="App">
            <Header/>
            <NavBar/>
            <Content/>
      </div>
   );
}

export default App;

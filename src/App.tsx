import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {NavBar} from "./components/NavBar/NavBar";
import {Dialogs} from "./components/Dialogs/Dialogs";

function App() {
   return (
      <div className="App">
         <Header/>
         <NavBar/>
         <div className="App-wrapper-content">
            <Dialogs/>
         </div>
         {/*<Profile/>*/}
      </div>
   );
}

export default App;

import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {NavBar} from "./components/NavBar/NavBar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import state from "./redux/state";

function App()
{
   return (
      <BrowserRouter>
         <div className="App">
            <Header/>
            <NavBar/>
            <div className='AppWrapperContent'>
               <Route path='/dialogs' render={() =>
                  <Dialogs
                     dialogs={state.dialogsPage.dialogs}
                     messages={state.dialogsPage.messages}
                  />
               }/>
               <Route path='/profile' render={() => <Profile posts={state.profilePage.posts}/>}/>
               <Route path='/news' render={() => <News/>}/>
               <Route path='/music' render={() => <Music/>}/>
               <Route path='/settings' render={() => <Settings/>}/>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;

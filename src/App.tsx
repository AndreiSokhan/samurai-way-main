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

export type PostPropsType = {
   id: number
   message: string
   likesCount: number
}

type PostsDataPropsType={
   posts:Array<PostPropsType>
}



function App(props:PostsDataPropsType) {

   return (
      <BrowserRouter>
         <div className="App">
            <Header/>
            <NavBar/>
            <div className='AppWrapperContent'>
               <Route path='/dialogs' render={() => <Dialogs/>}/>
               <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
               <Route path='/news' render={() => <News/>}/>
               <Route path='/music' render={() => <Music/>}/>
               <Route path='/settings' render={() => <Settings/>}/>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;

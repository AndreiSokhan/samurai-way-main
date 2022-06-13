import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {Chat} from "./Chat/Chat";
import {Post} from "../Profile/MyPosts/Post/Post";

export const Dialogs = () => {

   //уровень бизнес логики
   let dialogsData = [
      {id: '1', name: 'Dima'},
      {id: '2', name: 'Max'},
      {id: '3', name: 'Lera'},
      {id: '4', name: 'Dasha'},
      {id: '5', name: 'Igor'}
   ]

   let messagesData = [
      {id: '1', message: 'Hi'},
      {id: '2', message: 'How are you?'},
      {id: '3', message: 'What are you doing'},
      {id: '4', message: 'What you thin about IT-KAMASUTRA?'}
   ]

   //уровень UI

      // <Post message={postData[0].message} likesCount={postData[0].likesCount}/>

   return (
      <div className={s.Dialogs}>
         <div className={s.DialogsItems}>
            <DialogsItems name={dialogsData[0].name} id={dialogsData[0].id}/>
            <DialogsItems name={dialogsData[1].name} id={dialogsData[1].id}/>
            <DialogsItems name={dialogsData[2].name} id={dialogsData[2].id}/>
            <DialogsItems name={dialogsData[3].name} id={dialogsData[3].id}/>
            <DialogsItems name={dialogsData[4].name} id={dialogsData[4].id}/>
         </div>

         <div className={s.ChatItems}>
            <Chat message={messagesData[0].message}/>
            <Chat message={messagesData[1].message}/>
            <Chat message={messagesData[2].message}/>
            <Chat message={messagesData[3].message}/>
         </div>

      </div>
   );
};

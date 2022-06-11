import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {Chat} from "./Chat/Chat";

export const Dialogs = () => {
   return (
      <div className={s.Dialogs}>
         <div className={s.DialogsItems}>
            <DialogsItems name={'Dima'} id={'1'}/>
            <DialogsItems name={'Max'} id={'2'}/>
            <DialogsItems name={'Lera'} id={'3'}/>
            <DialogsItems name={'Dasha'} id={'4'}/>
            <DialogsItems name={'Igor'} id={'5'}/>
         </div>

         <div className={s.ChatItems}>
            <Chat text={'Hi'}/>
            <Chat text={'How are you?'}/>
            <Chat text={'What are you doing?'}/>
            <Chat text={'What you thin about IT-KAMASUTRA?'}/>
         </div>

      </div>
   );
};

import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogsItems/DialogItem";
import {Chat} from "./Chat/Chat";


export const Dialogs = (props:) => {

   let dialogsEl = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);

   let messagesEl = props.messages.map((m) =>
      <Chat message={m.message}/>
   );

   //уровень UI (User interface)
   return (
      <div className={s.Dialogs}>
         <div className={s.DialogsItems}>{dialogsEl}</div>
         <div className={s.ChatItems}>{messagesEl}</div>
      </div>
   );
};

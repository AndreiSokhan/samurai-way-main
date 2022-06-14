import React from 'react';
import s from './Dialogs.module.css';
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {Chat} from "./Chat/Chat";

export const Dialogs = () => {

   //уровень бизнес логики (BLL - Business Logic Layer) (в данное время этим занимается Redux)
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


   let dialogsEl = dialogsData.map((d) => <DialogsItems name={d.name} id={d.id}/>);

   let messagesEl = messagesData.map((m) =>
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

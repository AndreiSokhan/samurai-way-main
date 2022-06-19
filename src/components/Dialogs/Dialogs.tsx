import React from 'react';
import s from './Dialogs.module.css';
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {Chat} from "./Chat/Chat";

export const Dialogs = () => {

   //уровень бизнес логики (BLL - Business Logic Layer) (в данное время этим занимается Redux)



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

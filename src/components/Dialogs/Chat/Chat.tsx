import React from 'react';
import s from './Chat.module.css';
import {NavLink} from "react-router-dom";

type ChatType = {
   text: string
}

export const Chat = (props: ChatType) => {

   return (
      <div className={s.Chat}>{props.text}</div>
   );
};

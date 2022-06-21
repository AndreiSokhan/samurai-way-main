import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
   id: number
   name: string
}

export const DialogItem = (props: DialogItemPropsType) => {

   return (
      <div className={s.DialogItem}>
         <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
      </div>
   );
};

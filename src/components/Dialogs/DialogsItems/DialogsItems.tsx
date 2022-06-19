import React from 'react';
import s from './DialogsItems.module.css';
import {NavLink} from "react-router-dom";

type DialogsItemsType = {
   id: string
   name: string

}

export const DialogsItems = (props: DialogsItemsType) => {

   return (
      <div className={s.DialogsItems}>
         <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
      </div>
   );
};

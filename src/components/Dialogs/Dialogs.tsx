import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
   return (
      <div className={s.Dialogs}>
         {/*<h1>DIALOGS</h1>*/}
         <div className={s.DialogsItems}>
            <div className={s.Dialog}>
               <NavLink to="/dialogs/1" activeClassName={s.active}>Dima</NavLink>
            </div>
            <div className={s.Dialog}>
               <NavLink to="/dialogs/2" activeClassName={s.active}>Max</NavLink>
            </div>
            <div className={s.Dialog}>
               <NavLink to="/dialogs/3" activeClassName={s.active}>Igor</NavLink>
            </div>
            <div className={s.Dialog}>
               <NavLink to="/dialogs/4" activeClassName={s.active}>Lera</NavLink>
            </div>
            <div className={s.Dialog}>
               <NavLink to="/dialogs/5" activeClassName={s.active}>Dasha</NavLink>
            </div>
         </div>
         <div className={s.ChatItems}>
            <div className={s.Chat}>Hi</div>
            <div className={s.Chat}>How are you?</div>
            <div className={s.Chat}>What are you doing?</div>
            <div className={s.Chat}>What you thin about IT-KAMASUTRA?</div>
         </div>
      </div>
   );
};

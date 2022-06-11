import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from 'react-router-dom';

export function NavBar() {
   return (
      <div className={s.NavBar}>
         <ul className={s.NavBarList}>
            <li className={s.NavBarItem}>
               <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </li>
            <li className={s.NavBarItem}>
               <NavLink to="/dialogs" activeClassName={s.active}>Message</NavLink>
            </li>
            <li className={s.NavBarItem}>
               <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </li>
            <li className={s.NavBarItem}>
               <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </li>
            <li className={s.NavBarItem}>
               <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </li>
         </ul>
      </div>
   );
}


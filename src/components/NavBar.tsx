import React from 'react';
import s from './NavBar.module.css';

export function NavBar() {
   return (
      <div className={s.NavBar}>
         NAVBAR
         <div>
            <ul>
               <li><a>Profile</a></li>
               <li><a>Message</a></li>
               <li><a>News</a></li>
               <li><a>Settings</a></li>
            </ul>
         </div>
      </div>
   );
}


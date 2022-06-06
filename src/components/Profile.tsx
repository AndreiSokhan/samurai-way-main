import React from 'react';
import s from './Profile.module.css';

export function Profile() {
   return (
      <div className={s.Profile}>
         <div>Main CONTENT our social network</div>
         <div className={s.ProfileHeaderImg}>
            <img src="https://cdn.pixabay.com/photo/2016/01/24/02/43/banner-1158378__340.jpg" alt="header"/>
         </div>
         <div className={s.ProfileMyself}>
            <img src="https://krasivosti.pro/uploads/posts/2021-07/thumbs/1625891539_33-krasivosti-pro-p-kvadratnii-kot-koti-krasivo-foto-40.jpg" alt="photo"/>

         </div>
         <div></div>
      </div>
   );
}

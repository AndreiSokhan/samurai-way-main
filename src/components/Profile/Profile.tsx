import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
   return (
      <div className={s.Profile}>
         <div>Main CONTENT our social network</div>
         <div className={s.ProfileHeaderImg}>
            <img src="https://cdn.pixabay.com/photo/2016/01/24/02/43/banner-1158378__340.jpg" alt="header"/>
         </div>
         <div className={s.ProfileMyself}>
            <img className={s.ProfileIcon} src="https://texterra.ru/upload/medialibrary/ba8/sucqzb796wd8o9r9c2rhtsaq36jeyom0/3_1.webp" alt="photo"/>
            <MyPosts/>
         </div>
         <div></div>
      </div>
   );
}

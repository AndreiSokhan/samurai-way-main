import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {

   let posts = [
      {id: 1, message: 'Hi, how are you', likesCount: 12},
      {id: 2, message: "it's my first post in my social network", likesCount: 2},
      {id: 2, message: "Hello WORLD", likesCount: 50},
      {id: 2, message: "it's amazing", likesCount: 23},
      {id: 2, message: "i'm a future it specialist", likesCount: 43}
   ]

   return (
      <div>
         <div className={s.ProfileHeaderImg}>
            <ProfileInfo/>
            <MyPosts posts={}/>
         </div>
      </div>
   );
}


//время 28 урока на котором остановился - 4:44 мин

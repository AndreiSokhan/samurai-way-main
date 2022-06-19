import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type PostPropsType = {
   id: number
   message: string
   likesCount: number
}

type PostsDataPropsType={
   posts:Array<PostPropsType>
}

export const Profile:React.FC<PostsDataPropsType> = (props) => {

   return (
      <div>
         <div className={s.ProfileHeaderImg}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
         </div>
      </div>
   );
}

//время 28 урока на котором остановился - 4:44 мин

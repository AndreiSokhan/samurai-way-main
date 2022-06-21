import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import state from "../../redux/state";

export type PostPropsType = {
   id: number
   message: string
   likesCount: number
}

type PostsDataPropsType={
   posts:Array<PostPropsType>
}

export const Profile = (props:PostsDataPropsType) => {

   return (
      <div>
         <div className={s.ProfileHeaderImg}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
         </div>
      </div>
   );
}


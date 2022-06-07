import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
   return (
      <div className={s.MyPosts}>
         <h3>My posts</h3>
         <textarea name="post" id="" cols={40} rows={7}></textarea>
         <button>send post</button>
         <Post message={'Hi, how are you'} likeCount={2}/>
         <Post message={"it's my first post in my social network"} likeCount={5}/>
      </div>
   );
};
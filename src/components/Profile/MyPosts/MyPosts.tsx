import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {

   let postData = [
      {id: 1, message: 'Hi, how are you', likesCount:12},
      {id: 2, message: "it's my first post in my social network", likesCount:2}
   ]

   return (
      <div className={s.MyPosts}>
         <h3>My posts</h3>
         <textarea name="post" id="" cols={40} rows={7}></textarea>
         <button>send post</button>
         <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
         <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
      </div>
   );
};
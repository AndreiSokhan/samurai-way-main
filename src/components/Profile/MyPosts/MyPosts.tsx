import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {

   let postData = [
      {id: 1, message: 'Hi, how are you', likesCount: 12},
      {id: 2, message: "it's my first post in my social network", likesCount: 2},
      {id: 2, message: "Hello WORLD", likesCount: 50},
      {id: 2, message: "it's amazing", likesCount: 23},
      {id: 2, message: "i'm a future it specialist", likesCount: 43}
   ]

   let postEl = postData.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

   return (
      <div className={s.MyPosts}>
         <h3>My posts</h3>
         <textarea name="post" id="" cols={30} rows={5}></textarea>
         <button>send post</button>
         {postEl}
      </div>
   );
}
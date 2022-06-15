import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export type PostPropsType = {
   id: string
   message: string
   likesCount: number
}

type PostDataPropsType={
   posts:Array<PostPropsType>
}


// tasks: Array<TasksPropsType>

export const MyPosts = (props:PostDataPropsType) => {

   let postEl =
      props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

   return (
      <div className={s.MyPosts}>
         <h3>My posts</h3>
         <textarea name="post" id="" cols={30} rows={5}></textarea>
         <button>send post</button>
         {postEl}
      </div>
   );
}
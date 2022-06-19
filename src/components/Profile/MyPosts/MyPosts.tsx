import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export type PostPropsType = {
   id: number
   message: string
   likesCount: number
}

type PostsDataPropsType={
   posts:Array<PostPropsType>
}

export const MyPosts:React.FC<PostsDataPropsType> = (props) => {

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
import React from 'react';
import s from './Post.module.css';

type MyPostType = {
   message: string
   likesCount: number
}

export const Post = (props: MyPostType) => {
   return (
      <div className={s.Post}>
         <div className={s.PostWrapper}>
            <img className={s.PostImg}
                 src="https://gagadget.com/media/cache/7d/0b/7d0b86930b8dda648805168fcf141070.jpg"
                 alt="logo post"/>
            <p>{props.message}</p>
         </div>
         <div>
            <span className={s.PostLike}>Like{props.likesCount}</span>
            <span className={s.PostDISLike}>DISLike</span>
         </div>
      </div>
   );
};
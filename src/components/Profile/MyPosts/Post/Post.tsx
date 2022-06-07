import React from 'react';
import s from './Post.module.css';

export const Post = () => {
   return (
      <div className={s.Post}>
         <div className={s.PostWrapper}>
            <img className={s.PostImg}
                 src="https://www.caricature-art.com/wp-content/uploads/2016/01/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D1%81%D0%BE%D1%86-%D1%81%D0%B5%D1%82%D0%B8-785x785.jpg"
                 alt="logo post"/>
            <p> POST </p>
         </div>
         <div>
            <span>Like</span>
            <span>DISLike</span>
         </div>
      </div>
   );
};
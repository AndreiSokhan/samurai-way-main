import React from 'react';
import s from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
   return (
      <div className={s.ProfileInfo}>
         <img className={s.ProfileImg} src="https://cdn.pixabay.com/photo/2016/01/24/02/43/banner-1158378__340.jpg"
              alt="header"/>
         <div className={s.ProfileMyself}>
            <img className={s.ProfileIcon} src="https://img.championat.com/i/o/m/16412038301833088240.jpg" alt="photo"/>
            <div className={s.ProfilePage}>
               <h2 className={s.ProfileName}>Andrey</h2>
               <div className={s.ProfileDiscription}>
                  Date of Birthday: 23 may 1992<br/>
                  City: Minsk<br/>
                  Education: CDA near Moscow<br/>
                  Wes Site: -<br/>
               </div>
            </div>
         </div>
      </div>
   );
};
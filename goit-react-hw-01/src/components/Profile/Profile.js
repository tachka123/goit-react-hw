import React from 'react';
import style from './profile.module.css';

function Profile({ user }) {
  return (
    <div className={style.profile}>
      <div>
        <img src={user.avatar} alt="user avatar" className={style.avatar} />
        <h2>{user.name}</h2>
        <p className={style.tag}>@{user.tag}</p>
        <p className={style.location}>{user.location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span>Followers:</span>
          <span className={style.quantity}>{user.stats.followers}</span>
        </li>
        <li>
          <span>Views:</span>
          <span className={style.quantity}>{user.stats.views}</span>
        </li>
        <li>
          <span>Likes:</span>
          <span className={style.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;

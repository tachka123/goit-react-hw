import React from 'react';
import PropTypes from 'prop-types';
import style from './profile.module.css';

function Profile({
  user: {
    name,
    avatar,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={style.profile}>
      <div>
        <img src={avatar} alt="user avatar" className={style.avatar} />
        <h2>{name}</h2>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span>Followers:</span>
          <span className={style.quantity}>{followers}</span>
        </li>
        <li>
          <span>Views:</span>
          <span className={style.quantity}>{views}</span>
        </li>
        <li>
          <span>Likes:</span>
          <span className={style.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.defaultProps = {
  user: {},
};

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    tag: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.object,
  }),
};

export default Profile;

import React from 'react';
import PropTypes from 'prop-types';
import style from './friends.module.css';

function FriendList({ friendList }) {
  return (
    <ul className={style.friendsList}>
      {friendList.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id}>
            <span
              className={`${style.status} ${
                isOnline ? style.online : style.offline
              }`}
            />
            <img className={style.avatar} src={avatar} alt="" />
            <p className={style.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friendList: PropTypes.array,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendList;
